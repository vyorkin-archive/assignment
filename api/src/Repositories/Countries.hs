module Repositories.Countries (find, search) where

import Database.Persist.Sqlite (Entity(..), Key)
import Database.Esqueleto

import Storage

--------------------------------------------------------------------------------
-- | Find a country by the given 'key'
find :: Key Country -> IO (Maybe Country)
find key = connect $ get key

--------------------------------------------------------------------------------
-- | Fetch cities that contain the given 'query' in their names
search :: String -> IO [Entity Country]
search query =
    connect $ select $ from $ \country -> do
        where_ (country ^. CountryName `like` (%) ++. val query ++. (%))
        orderBy [asc (country ^. CountryName)]
        limit 10
        return country
