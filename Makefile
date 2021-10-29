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

brain-progression: # запуск игры "Арифметическая прогрессия"
		node bin/brain-progression.js

brain-prime: # запуск игры "Простое ли число?"
		node bin/brain-prime.js

lint: # запуск линтера
		npx eslint .

publish:
		npm publish --dry-run
		npm link