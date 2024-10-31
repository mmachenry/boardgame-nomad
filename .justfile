install:
  yarn install

dev:
  yarn run dev

build:
  yarn run build --base "/boardgame-nomad"

publish:
  node scripts/publish.js
