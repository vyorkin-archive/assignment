module Forms where

import Data.Text (Text)
import qualified Data.Text as T (find, head, null)

import Text.Digestive
  ( Form
  , (.:)
  , choice
  , Result(..)
  , bool
  , check
  , text
  , string
  , listOf
  , stringRead
  , validate
  )
import Text.Digestive.Util
import Text.Digestive.Aeson (digestJSON, jsonErrors)

import Storage
import Fields
import Validations
  ( isNotEmpty
  , isPhone
  )

countryForm :: Monad m => Form Text m Country
countryForm = Country <$> "name" .: nonEmptyString
  where
    nonEmptyString =
      check "Name cannot be empty" (not . null) $ string Nothing

-- data UserForm = UserForm { phone :: String
--                          , firstName :: String
--                          , middleName :: String
--                          , lastName :: String
--                          , country

osForm :: Monad m => Form Text m OS
osForm = choice [(IOS, "iOS"), (Android, "Android")] Nothing

-- signUpForm :: Monad m => Form Text m User
-- signUpForm = User
--     <$> "phone" .: string Nothing
--     <*> "firstName" .: string Nothing
--     <*> "middleName" .: string Nothing
--     <*> "lastName" .: string Nothing
--     <*> "country" .: string Nothing
--     <*> "city" .: string Nothing
--     <*> "os" .: osForm
  -- where
  --   phone = check phoneErrMsg validatePhone
  --   os = check osErrMsg validateOS

  --   validatePhone = isNotEmpty . isPhone
  --   validateOS = isNotEmpty . isOS
  --   integer = stringRead integerErrMsg

-- signInForm :: Monad m => Form Text m User
-- signInForm = User
--     <$> "phone" .: text Nothing
--     <*> "code" .: text Nothing
