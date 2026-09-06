"use client";

import { Button as AntButton } from "antd";
import type { ComponentProps } from "react";

export type ButtonProps = ComponentProps<typeof AntButton>;

export function Button(props: ButtonProps) {
  return <AntButton {...props} />;
}
