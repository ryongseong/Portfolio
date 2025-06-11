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

  const contentBlocks: string[] = pageBlock.content || [];
  const parsedBlocks: Array<{ id: string; type: string; content: string }> = [];
  let textContent = "";

  contentBlocks.forEach((blockId: string) => {
    if (recordMap.block[blockId]) {
      const block = recordMap.block[blockId].value;

      if (block && block.properties && block.properties.title) {
        const blockContent = block.properties.title
          .map((textArray: string[]) => textArray[0])
          .join(" ");

        parsedBlocks.push({
          id: blockId,
          type: block.type,
          content: blockContent,
        });

        if (block.type === "text" || block.type === "bulleted_list") {
          textContent += blockContent + "\n\n";
        } else if (
          block.type === "sub_header" ||
          block.type === "sub_sub_header"
        ) {
          textContent += `## ${blockContent}\n\n`;
        }
      }
    }
  });

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
