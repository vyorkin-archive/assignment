module Validations where

import Data.Text (Text)
import qualified Data.Text as T (null)

-- isAdult :: Monad m => Validator m String User

isNotEmpty :: Text -> Bool
isNotEmpty = not . T.null

isPhone :: Text -> Bool
isPhone _ = True
