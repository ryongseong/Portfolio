import { NextRequest, NextResponse } from "next/server";
import { NOTION_TOKEN } from "../../../../../config/index";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split("/");
  const pageId = pathSegments[pathSegments.length - 1];

  try {
    const response = await fetch(
      "https://www.notion.so/api/v3/loadCachedPageChunkV2",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
          Authorization: `Bearer ${NOTION_TOKEN}`,
        },
        body: JSON.stringify({
          page: {
            id: pageId,
          },
          cursor: {
            stack: [],
          },
          verticalColumns: false,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch project details" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching project details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
