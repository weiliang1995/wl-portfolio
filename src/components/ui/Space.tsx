"use client";

import { Space as AntSpace } from "antd";
import type { ComponentProps } from "react";

export type SpaceProps = ComponentProps<typeof AntSpace>;

export function Space(props: SpaceProps) {
  return <AntSpace {...props} />;
}
