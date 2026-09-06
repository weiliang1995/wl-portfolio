"use client";

import { Card as AntCard } from "antd";
import type { ComponentProps } from "react";

export type CardProps = ComponentProps<typeof AntCard>;

export function Card(props: CardProps) {
  return <AntCard {...props} />;
}
