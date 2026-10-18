FROM archlinux:latest

COPY --from=denoland/deno:bin-2.9.7 /deno /usr/local/bin/deno

WORKDIR /app

COPY . .

RUN deno cache src/index.ts

RUN deno install

CMD [ "deno", "run", "-A", "src/main.ts" ]