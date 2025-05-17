# 1. 빌드 단계
FROM node:22.2.0-alpine3.19 AS builder
WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json* ./
RUN npm ci

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2. 실행 단계
FROM node:22.2.0-alpine3.19
WORKDIR /app

# 환경 변수 설정
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# 사용자 설정
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# 필요한 파일 복사
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# 사용자 전환
USER nextjs

# 포트 노출
EXPOSE 3000

# 애플리케이션 실행
CMD ["node", "server.js"]