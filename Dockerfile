FROM node:12 as builder
WORKDIR /home/node

COPY . /home/node
#RUN npm install sequelize-cli
ENV NODE_ENV build
#USER node
RUN npm install --production
RUN npm install @nestjs/cli
RUN npm run build
# ---
FROM node:12-alpine

#USER node
WORKDIR /home/node

ENV DB_DIALECT=postgres
COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/
COPY --from=builder /home/node/dist/ /home/node/dist/
EXPOSE 5000
#RUN npm ci
ENTRYPOINT [ "npm", "run", "start:prod" ]