"use client";

import { ConfigProvider, theme } from "antd";
import type { ReactNode } from "react";

// Single place where the Ant Design theme is configured. Routes never touch
// ConfigProvider themselves.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#4c8dff",
          colorBgBase: "#0d0f14",
          borderRadius: 8,
          fontSize: 15,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
