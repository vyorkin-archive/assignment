module Main (main) where

import System.Environment (getEnv)
import Network.Wai.Middleware.RequestLogger (logStdoutDev)
import Web.Scotty (scotty, middleware)

import Middleware (allowCORS)
import Routes (handleRequest)
import qualified Storage as DB (setup)

main :: IO ()
main = do
    DB.setup
    port <- read <$> getEnv "PORT"
    scotty port $ do
        middleware allowCORS
        middleware logStdoutDev
        handleRequest
