# Makefile

install: # установка пакетов
		npm ci

brain-games: # запуск bin/brain-games.js
		node bin/brain-games.js

brain-even: # запуск bin/brain-even.js
		node bin/brain-even.js

brain-calc: # запуск bin/brain-calc.js
		node bin/brain-calc.js

lint: # запуск линтера
		npx eslint .

publish:
		npm publish --dry-run
		npm link