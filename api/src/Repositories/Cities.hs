module Repositories.Cities (find, search) where

import Database.Persist.Sqlite (Entity(..), Key)
import Database.Esqueleto

import Storage

--------------------------------------------------------------------------------
-- | Find a city by the given 'key'
find :: Key City -> IO (Maybe City)
find key = connect $ get key

--------------------------------------------------------------------------------
-- | Fetch cities by the specified country 'key',
-- that contain the given 'query' in their names
search :: (Key Country) -> String -> IO [Entity City]
search country query =
    connect $ select $
    from $ \city -> do
        where_ (   (city ^. CityCountry ==. val country)
               &&. (city ^. CityName `like` (%) ++. val query ++. (%)))
        orderBy [asc (city ^. CityName)]
        limit 10
        return city
