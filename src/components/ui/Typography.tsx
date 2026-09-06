"use client";

import { Typography as AntTypography } from "antd";
import type { ComponentProps } from "react";

const { Title: AntTitle, Text: AntText, Paragraph: AntParagraph } = AntTypography;

export type TitleProps = ComponentProps<typeof AntTitle>;
export type TextProps = ComponentProps<typeof AntText>;
export type ParagraphProps = ComponentProps<typeof AntParagraph>;

export function Title(props: TitleProps) {
  return <AntTitle {...props} />;
}

export function Text(props: TextProps) {
  return <AntText {...props} />;
}

export function Paragraph(props: ParagraphProps) {
  return <AntParagraph {...props} />;
}
