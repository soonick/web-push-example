# Web push example

This repo shows a simple example web app and server that implement push notifications.

To get the example running we need to first generate a VAPID key pair. From the `server` folder:

```sh
npm i
node ./node_modules/web-push/src/cli.js generate-vapid-keys --json
```

The command will generate a JSON similar to this one:

```json
{"publicKey":"BH_TI-HD04UTOv3C6Rlq6-w0HGw_DpbBpBv8JDEgBKoqdKkUnWfnqXE9XTUcS1FNrdbQucoCY5zo8n6ivHb-GwM","privateKey":"ug0NOgNPInoyGRcRPIrF5TjiXzgc4bFqJNv61DSJ1I4"}
```

In `app/index.html` add the public key to the line that looks like this:

```js
const VAPID_PUBLIC = '<Replace with vapid public key>';
```

In `server/app.js` replace both keys in these lines:

```js
const VAPID_PUBLIC = "<Replace with vapid public key>';
const VAPID_PRIVATE = "<Replace with vapid private key>";
```

To run the server:

```sh
# From the server folder
npm i
node app.js
```

To run the web app:

```sh
# From the app folder
python -m SimpleHTTPServer 9876
```

Start by going to `http://localhost:9876`. This will save the subscription in the server. Now we can go to `http://localhost:9999/send-notification` to send a notification.
