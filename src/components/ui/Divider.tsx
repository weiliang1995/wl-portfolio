"use client";

import { Divider as AntDivider } from "antd";
import type { ComponentProps } from "react";

export type DividerProps = ComponentProps<typeof AntDivider>;

export function Divider(props: DividerProps) {
  return <AntDivider {...props} />;
}
