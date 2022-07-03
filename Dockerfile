FROM node:14-alpine as build-app

WORKDIR /app

COPY . .

RUN npm ci \
  && npm run build \
  && rm -rf node_modules \
  && npm ci --prod

FROM busybox as build-busybox

RUN mkdir /busybin
RUN busybox --install /busybin

FROM astefanutti/scratch-node:14

COPY --from=build-app /app/dist /app
COPY --from=build-app /app/node_modules /app/node_modules
COPY --from=build-busybox /busybin /bin

ENTRYPOINT ["node", "/app/index.js"]
