"use client";

import React, { ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";

interface AntdStyledComponentsRegistryProps {
  children: ReactNode;
}

export default function AntdStyledComponentsRegistry({
  children,
}: AntdStyledComponentsRegistryProps) {
  const [cache] = React.useState<ReturnType<typeof createCache>>(() =>
    createCache()
  );

  // insert cache style on the server
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    ></style>
  ));

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
