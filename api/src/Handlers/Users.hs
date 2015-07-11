module Handlers.Users (index, show) where

import Prelude hiding (show)

import Control.Monad.IO.Class (liftIO)

import Network.HTTP.Types (status404)
import Web.Scotty (ActionM, param, status, json)

import Utils (toKey)
import qualified Repositories.Users as Users (find, list)
import Handlers.Utils (secure)

show :: ActionM ()
show = secure $ do
    id' <- param "id"
    result <- liftIO $ Users.find $ toKey id'
    case result of
        Nothing -> status status404
        Just user -> json user

index :: ActionM ()
index = secure $ do
    list <- liftIO $ Users.list
    json list
