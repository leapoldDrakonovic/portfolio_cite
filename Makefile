BRANCH_NAME=$(shell git rev-parse --abbrev-ref HEAD)
COMMIT_MESSAGE ?= "add: new things by make file"

# .PHONY говорит make, что цель не является файлом
.PHONY: all status add commit push pull

all: status add commit push

# Проверка статуса git
status:
	@git status

# Добавление изменений в stage
add:
	@git add .

# Коммит с сообщением
commit:
	@git commit -m "$(COMMIT_MESSAGE)"; \


# Push изменений в текущую ветку
push:
	@git push origin -u $(BRANCH_NAME)

# Pull последних изменений с удаленного репозитория
pull:
	@git pull origin $(BRANCH_NAME)