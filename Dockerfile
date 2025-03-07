FROM node:23-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:23-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY next.config.ts ./

EXPOSE 3001
CMD ["npm", "start"]
