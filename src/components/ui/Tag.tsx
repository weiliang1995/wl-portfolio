"use client";

import { Tag as AntTag } from "antd";
import type { ComponentProps } from "react";

export type TagProps = ComponentProps<typeof AntTag>;

export function Tag(props: TagProps) {
  return <AntTag {...props} />;
}
