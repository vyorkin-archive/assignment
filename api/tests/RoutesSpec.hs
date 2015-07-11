module RoutesSpec where

import Network.Wai (Application)
import Web.Scotty (scottyApp)

import Test.Hspec
import Test.Hspec.Wai

import Routes (handleRequest)

app :: IO Application
app = scottyApp handleRequest

spec :: Spec
spec = with app $ do
  describe "GET /api/v1/ping" $ do
    it "should produce a 200 response code" $ do
      get "/api/v1/ping" `shouldRespondWith` 200
