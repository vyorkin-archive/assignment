module Fields where

import Data.Aeson (FromJSON, ToJSON)
import GHC.Generics (Generic)
import Database.Persist.TH (derivePersistField)

data OS = IOS | Android deriving (Eq, Show, Read, Generic)
derivePersistField "OS"

instance FromJSON OS
instance ToJSON OS
