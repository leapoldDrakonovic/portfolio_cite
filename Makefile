BRANCH_NAME=$(shell git rev-parse --abbrev-ref HEAD)
COMMIT_MESSAGE ?= 'add: new'

.PHONY: all status add commit push pull

all: status add commit push deploy

status:
	@git status

add:
	@git add .

commit:
	@git commit -m "$(COMMIT_MESSAGE)"


push:
	@git push origin -u $(BRANCH_NAME)

pull:
	@git pull origin $(BRANCH_NAME)

deploy:
	@npm run deploy
