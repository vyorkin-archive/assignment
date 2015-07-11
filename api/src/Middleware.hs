module Middleware (allowCORS) where

import Network.Wai (Middleware)
import Network.Wai.Middleware.AddHeaders (addHeaders)

allowCORS :: Middleware
allowCORS = addHeaders [ ("Access-Control-Allow-Origin", "*")
                       -- ^- yep, I know its bad
                       , ("Access-Control-Allow-Headers", "Accept, Content-Type")
                       , ("Access-Control-Allow-Methods", "HEAD, GET, POST")
                       ]
