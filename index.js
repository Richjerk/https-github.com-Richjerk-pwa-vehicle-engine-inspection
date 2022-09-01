import React from "react"
import Layout from "../components/layout"
const Index=()=>{
return (
<Layout>
<h1>iSanusi Vehicle Inspection</h1>
<h2>Industrial AR Technology The Foreseer...!</h2>
</Layout>
)
}
export default index

const { initializeApp } = require("firebase/app");
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

const app = initializeApp({
  // Your firebase configuration object
});

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});