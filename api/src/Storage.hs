module Storage where

import Control.Monad (liftM, mzero)
import Control.Monad.IO.Class (MonadIO)
import Control.Monad.Reader (ReaderT)
import Control.Monad.Logger (NoLoggingT, runNoLoggingT)
import Control.Monad.Trans.Resource (runResourceT, ResourceT)

import Database.Persist (Filter)
import Database.Persist.Quasi (lowerCaseSettings)
import Database.Persist.Sql (SqlBackend)
import Database.Persist.TH
  ( persistFileWith
  , share
  , mkPersist
  , mkMigrate
  , sqlSettings
  )
import Database.Persist.Sqlite
  ( SqlPersistT
  , Entity
  , withSqliteConn
  , runSqlConn
  , runMigration
  , entityKey
  , entityVal
  )
import Database.Persist.Class
  ( insert
  , insert_
  , insertMany_
  , deleteWhere
  )

import Data.Aeson

import Control.Monad.IO.Class (liftIO)
import Control.Monad.IO.Class (MonadIO)
import Control.Monad.Reader (ReaderT)

import Fields
import Utils (toKey)

-- its a TH magic! mkPersist declares:
-- 1) datatypes for each entity
-- 2) a PersistentEntity instance for each datatype defined
-- 3) generates a migrateAll function that calls migrate for each defined entity

share [mkPersist sqlSettings, mkMigrate "migrateAll"]
    $(persistFileWith lowerCaseSettings "config/models")

connect :: SqlPersistT (ResourceT (NoLoggingT IO)) a -> IO a
connect = runNoLoggingT . runResourceT . withSqliteConn "assignment.sqlite3" . runSqlConn

setup :: IO ()
setup = connect $ do
  migrate
  clear
  seed

migrate :: (MonadIO m) => ReaderT SqlBackend m ()
migrate = runMigration migrateAll

seed :: (MonadIO m) => ReaderT SqlBackend m ()
seed = do

  russia <- insert $ Country "Россия"
  nepal <- insert $ Country "Непал"

  moscow <- insert $ City russia "Москва"
  insertMany_ [ City russia "Санкт-Петербург"
              , City russia "Ульяновск"
              ]

  kathmandu <- insert $ City nepal "Катманду"
  insertMany_ [ City nepal "Покхара"
              , City nepal "Лалитпур"
              ]

  insert_ $ User "+79057220657" (Just "Василий") (Just "Васильевич") (Just "Еркин") IOS russia moscow Nothing
  insert_ $ User "+79268473219" (Just "Чак") (Just "Вячеславович") (Just "Норрис") Android nepal kathmandu Nothing

clear :: (MonadIO m) => ReaderT SqlBackend m ()
clear = do
  deleteWhere ([] :: [Filter Country])
  deleteWhere ([] :: [Filter City])
  deleteWhere ([] :: [Filter User])
