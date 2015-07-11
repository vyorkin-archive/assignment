module Handlers.Cities (search) where

import Control.Monad.IO.Class (liftIO)

import Network.HTTP.Types (status404, created201)
import Web.Scotty (ActionM, status, param, json, jsonData)

import Database.Persist.Sqlite
  ( Entity(..)
  , entityKey
  , entityVal
  )

import Utils (toKey, defparam)
import qualified Repositories.Cities as Cities (search)

search :: ActionM ()
search = do
    country <- param "countryId"
    query <- defparam "query" ""
    cities <- liftIO $ Cities.search (toKey country) query
    json cities
