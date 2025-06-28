export async function getProjectDetails(pageId: string) {
  try {
    const response = await fetch(`/api/project/${pageId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}

interface NotionBlock {
  value: {
    id: string;
    type: string;
    properties?: {
      title?: Array<Array<string>>;
      [key: string]: unknown;
    };
    content?: string[];
    [key: string]: unknown;
  };
}

interface NotionRecordMap {
  block: {
    [key: string]: NotionBlock;
  };
  [key: string]: unknown;
}

export function parseNotionBlocks(recordMap: NotionRecordMap) {
  if (!recordMap || !recordMap.block) {
    return { blocks: [], content: "" };
  }

  let pageBlock: NotionBlock["value"] | null = null;
  let pageBlockId: string | null = null;

  // 페이지 블록 찾기
  for (const blockId in recordMap.block) {
    const block = recordMap.block[blockId].value;
    if (block.type === "page") {
      pageBlock = block;
      pageBlockId = blockId;
      break;
    }
  }

  if (!pageBlock || !pageBlockId) {
    return { blocks: [], content: "" };
  }

  const parsedBlocks: Array<{ id: string; type: string; content: string }> = [];
  let textContent = "";

  const processBlock = (blockId: string, depth: number = 0) => {
    const blockWrapper = recordMap.block[blockId];
    if (!blockWrapper || !blockWrapper.value) return;

    const block = blockWrapper.value;

    let blockContent = "";
    if (block.properties && block.properties.title) {
      blockContent = block.properties.title
        .map((textArray: string[]) => textArray[0])
        .join(" ");
    }

    if (blockContent.trim()) {
      parsedBlocks.push({
        id: blockId,
        type: block.type,
        content: blockContent,
      });

      switch (block.type) {
        case "text":
        case "bulleted_list":
          textContent += blockContent + "\n\n";
          break;
        case "sub_header":
        case "sub_sub_header":
          textContent += `## ${blockContent}\n\n`;
          break;
        case "header":
          textContent += `# ${blockContent}\n\n`;
          break;
        case "numbered_list":
          textContent += `${blockContent}\n\n`;
          break;
        default:
          if (blockContent.trim()) {
            textContent += blockContent + "\n\n";
          }
          break;
      }
    }

    if (block.content && Array.isArray(block.content)) {
      block.content.forEach((childBlockId: string) => {
        processBlock(childBlockId, depth + 1);
      });
    }
  };

  if (pageBlock.content && Array.isArray(pageBlock.content)) {
    pageBlock.content.forEach((blockId: string) => {
      processBlock(blockId);
    });
  }

  let metadata: Record<string, string> = {};
  if (pageBlock.properties) {
    metadata = {
      title: pageBlock.properties.title?.[0]?.[0] || "",
    };
  }

  return {
    blocks: parsedBlocks,
    content: textContent.trim(),
    metadata,
  };
}
