const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const webpush = require('web-push');
const app = express();
const port = 9999;

const VAPID_PUBLIC = '<Replace with vapid public key>';
const VAPID_PRIVATE = '<Replace with vapid private key>';

let subscription;

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  VAPID_PUBLIC,
  VAPID_PRIVATE
);

app.use(bodyParser.json());
app.use(cors());

app.post('/register-push-device', (req, res) => {
  console.log('saving subscription');
  subscription = req.body.subscription;
  res.end();
});

app.get('/send-notification', (req, res) => {
  console.log('sending notification');
  webpush.sendNotification(subscription, 'My message').catch((ex) => {
    console.log(ex);
  });
  res.end();
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
