# Makefile

install: # установка пакетов
		npm ci

brain-games: # запуск bin/brain-games.js
		node bin/brain-games.js

brain-even: # запуск bin/brain-even.js
		node bin/brain-even.js

lint: # запуск линтера
		npx eslint .

publish:
		npm publish --dry-run