# assignment

[objectives](https://gist.github.com/vladson/2459673aede359fba68e)

## stack

langs/stack/tech/tags/buzz:

* [haskell](https://www.haskell.org/)
* [es2015](http://www.ecma-international.org/ecma-262/6.0/)
* [babel](https://babeljs.io/)
* [react](http://facebook.github.io/react/)
* [react-router](https://github.com/rackt/react-router)
* [jest](https://facebook.github.io/jest/)
* [alt](https://github.com/goatslacker/alt)
* [scotty](https://github.com/scotty-web/scotty)
* [persistent](https://github.com/yesodweb/persistent)
* [esqueleto](https://github.com/prowdsponsor/esqueleto)
* [digestive-functors](https://github.com/jaspervdj/digestive-functors)
* [hspec](http://hspec.github.io/)
* [wai](https://github.com/yesodweb/wai)
* [aeson](https://github.com/bos/aeson)
* [webpack](http://webpack.github.io), [gulp](http://gulpjs.com)
* [postcss](https://github.com/postcss/postcss), [cssnext](http://cssnext.io)
* [normalize.css](http://necolas.github.io/normalize.css/)
* [fastclick](https://github.com/ftlabs/fastclick)

free, no sms

database: sqlite3 (for simplicity)

# prerequisites

install [stack](https://github.com/commercialhaskell/stack)
install [nvm](https://github.com/creationix/nvm)
install [avn](https://github.com/wbyoung/avn)
install [avn-nvm](https://github.com/wbyoung/avn-nvm)

`cd api`
`stack build`
`cabal install --enable-tests --only-dependencies`
`cabal configure --enable-tests`

`cd app`
`npm install`

# up & running

Basically its just `make api` and `make app`,
for more details see `Makefile`

* backend (api): `cd api && PORT=8088 cabal run`
* frontend (app): `cd app && npm start`

To run tests:
```
make test
```

# resources

* [haskell style guide](https://github.com/tibbe/haskell-style-guide/blob/master/haskell-style.md)
* [aeson tutorial](http://artyom.me/aeson)
* [aeson docs](https://hackage.haskell.org/package/aeson-0.6.1.0/docs/Data-Aeson.html)
* [persistent (book)](http://www.yesodweb.com/book/persistent)
* [persistent (post)](http://www.yesodweb.com/blog/2011/08/persistent-0-6-0)
* [template haskell (rus)](http://eax.me/template-haskell/) 
* [persistent & esqueleto](https://www.fpcomplete.com/school/starting-with-haskell/libraries-and-frameworks/persistent-db)
* [scotty docs](https://hackage.haskell.org/package/scotty-0.4.0/docs/Web-Scotty.html)
* [Network.HTTP.Types](https://hackage.haskell.org/package/http-types-0.3.0/docs/Network-HTTP-Types.html)

## further reading

* [wai session middleware](https://github.com/singpolyma/wai-session/blob/master/example/Main.hs)
* [clientsession](https://github.com/yesodweb/clientsession/tree/master)
* [scotty-session](https://github.com/agrafix/scotty-session)
* [resouce pool](http://eax.me/haskell-resource-pool/)

## ideas/thoughts

* [routing comparsion](https://github.com/AndrewRademacher/routing-comparison)
