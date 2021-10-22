# Makefile

install: # установка пакетов
		npm ci

brain-games: # запуск bin/brain-games.js
		node bin/brain-games.js

lint: # запуск линтера
		npx eslint .