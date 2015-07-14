module Handlers.Auth (signUp, requestPasscode, signIn) where

import Control.Monad (when)
import Control.Monad.IO.Class (liftIO)

import Database.Persist.Sqlite
  ( Entity(..)
  , entityKey
  , entityVal
  )

import Data.Aeson (object, (.=))

import Network.HTTP.Types
  ( status200
  , status404
  , created201
  , status400
  , status401
  )
import Web.Scotty
  ( ActionM
  , param
  , status
  , json
  , jsonData
  )

import Utils (generatePasscode)
import qualified Repositories.Users as Users
  ( create
  , findByPhone
  , updatePasscode
  )
import Storage
import Utils (defparam)

--------------------------------------------------------------------------------
signUp :: ActionM ()
signUp = do
    user <- jsonData
    userId <- liftIO $ Users.create user
    status created201
    json $ Entity userId user

--------------------------------------------------------------------------------
requestPasscode :: ActionM ()
requestPasscode = do
    phone <- param "phone"
    user <- liftIO $ Users.findByPhone phone
    case user of
      Nothing -> status status404
      Just (Entity key _) -> do
        passcode <- liftIO $ generatePasscode 5
        liftIO $ Users.updatePasscode key (Just passcode)
        json $ object ["passcode" .= passcode]

--------------------------------------------------------------------------------
signIn :: ActionM ()
signIn = do
    phone <- param "phone"
    entity <- liftIO $ Users.findByPhone phone
    case entity of
      Nothing -> status status404
      Just (Entity key user) -> do
        passcode <- param "passcode"
        case userPasscode user of
          Nothing -> status status400
          Just validPasscode -> do
            if (passcode == validPasscode)
              then do
                liftIO $ Users.updatePasscode key Nothing
                status status200
                json user
              else status status401
