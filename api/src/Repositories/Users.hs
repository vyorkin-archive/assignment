module Repositories.Users (create, find, list, findByPhone, updatePasscode) where

import Database.Persist (Filter(..), SelectOpt(..), (=.))
import Database.Persist.Sqlite (Entity(..), Key)
import Database.Persist.Class
  ( get
  , getBy
  , insert
  , update
  , selectList
  )

import Storage

--------------------------------------------------------------------------------
-- | Create a new user
create :: User -> IO (Key User)
create user = connect $ insert user

--------------------------------------------------------------------------------
-- | Find a user by the given 'key'
find :: Key User -> IO (Maybe User)
find key = connect $ get key

--------------------------------------------------------------------------------
-- | Find a user by the given phone number
findByPhone :: String -> IO (Maybe (Entity User))
findByPhone phone = connect $ getBy (UniqueUserPhone phone)

--------------------------------------------------------------------------------
-- | Fetch all users
list :: IO [Entity User]
list = connect $ selectList ([] :: [Filter User])   [Desc UserPhone]

--------------------------------------------------------------------------------
-- | Updates passcode for a user with the specified 'key'
updatePasscode :: Key User -> Maybe String -> IO ()
updatePasscode key passcode = connect $ update key [UserPasscode =. passcode]
