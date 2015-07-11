module Utils (mparam, defparam, toKey, generatePasscode) where
import Control.Monad.IO.Class (liftIO)

import Data.Text.Lazy (Text)

import System.Random (randomRs, newStdGen)

import Database.Persist.Sql (ToBackendKey, SqlBackend, Key, toSqlKey)
import Web.Scotty (ActionM, Parsable, param, rescue)

mparam :: (Parsable a) => Text -> ActionM (Maybe a)
mparam key = fmap Just (param key) `rescue` (\_ -> return Nothing)

defparam :: (Parsable a) => Text -> a -> ActionM a
defparam key def = param key `rescue` (\_ -> return def)

toKey :: ToBackendKey SqlBackend a => Integer -> Key a
toKey key = toSqlKey $ fromIntegral (key :: Integer)

--------------------------------------------------------------------------------
-- | Generates a random passcode of the given length
generatePasscode :: Int -> IO (String)
generatePasscode len = do
    gen <- newStdGen
    return $ take len $ randomRs ('a','z') gen
