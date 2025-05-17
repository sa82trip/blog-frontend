import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'standalone', // <--- 이 설정이 정확히 있는지 확인해주세요!
   productionBrowserSourceMaps: false, // (이것도 용량 최적화에 좋습니다)
};

export default nextConfig;
