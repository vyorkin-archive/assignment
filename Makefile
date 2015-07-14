app:
	cd app && npm build
	cd app && npm start

api:
	cd api && PORT=8088 cabal run

repl:
	cd api && cabal repl

test:
	cd api && cabal test
	cd app && npm test

install:
	cd api && cabal install --only-dependencies --enable-tests && cabal configure --enable-tests
	cd app && npm install

.PHONY: api app install test repl
