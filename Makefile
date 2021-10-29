# Makefile

install: # установка пакетов
		npm ci

brain-games: # запуск приветствия Brain Games
		node bin/brain-games.js

brain-even: # запуск игры "Проверка на четность"
		node bin/brain-even.js

brain-calc: # запуск игры "Калькулятор"
		node bin/brain-calc.js

brain-gcd: # запуск игры "Наибольший общий делитель"
		node bin/brain-gcd.js

lint: # запуск линтера
		npx eslint .

publish:
		npm publish --dry-run
		npm link