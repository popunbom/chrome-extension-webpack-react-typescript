clean:
	rm -rf ./dist/*

clean-all: clean
	rm -rf ./node_modules

setup:
	npm install

build:
	npm run build
