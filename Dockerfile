FROM node:16.20.0 as motherhelp_frontend
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]