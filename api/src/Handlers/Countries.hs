module Handlers.Countries (search) where

import Control.Monad.IO.Class (liftIO)

import Network.HTTP.Types (status404, created201)
import Web.Scotty (ActionM, status, param, json, jsonData)

import Database.Persist.Sqlite
  ( Entity(..)
  , entityKey
  , entityVal
  )

import Utils (defparam)
import qualified Repositories.Countries as Countries (search)

search :: ActionM ()
search = do
    query <- defparam "query" ""
    countries <- liftIO $ Countries.search query
    json countries
