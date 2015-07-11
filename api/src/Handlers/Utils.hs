module Handlers.Utils (ping, secure) where

import Web.Scotty (ActionM, param, text)

--------------------------------------------------------------------------------
-- | Always respond pong
ping :: ActionM ()
ping = text "pong"

--------------------------------------------------------------------------------
-- | Authenticate request
secure :: ActionM () -> ActionM ()
secure = id
