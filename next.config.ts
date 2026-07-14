import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Edge ランタイムのチャンク結合を安定化させるための設定
  serverExternalPackages: [],
};

export default nextConfig;
