module Routes (handleRequest) where

import Network.HTTP.Types.Status (notFound404)
import Web.Scotty (ScottyM, get, post, notFound, status)

import qualified Handlers.Utils as Utils (ping)
import qualified Handlers.Auth as Auth (signUp, requestPasscode, signIn)
import qualified Handlers.Users as Users (index, show)
import qualified Handlers.Countries as Countries (search)
import qualified Handlers.Cities as Cities (search)

handleRequest :: ScottyM ()
handleRequest = do
        get "/api/v1/ping" Utils.ping

        post "/api/v1/sign-up" Auth.signUp
        get "/api/v1/passcode" Auth.requestPasscode
        post "/api/v1/sign-in" Auth.signIn

        get "/api/v1/countries" Countries.search
        get "/api/v1/countries/:countryId/cities" Cities.search

        get "/api/v1/users" Users.index
        get "/api/v1/users/:id" Users.show

        notFound $ status notFound404
