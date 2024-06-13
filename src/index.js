const jsforce = require("jsforce");
require("dotenv").config({ path: "./.env" });

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const securityToken = process.env.SECURITY_TOKEN;
const LOGIN_URL = process.env.LOGIN_URL;
const TOPIC = process.env.TOPIC;

const conn = new jsforce.Connection({ loginUrl: LOGIN_URL });
conn.login(username, password + securityToken, function (err, res) {
  if (err) {
    return console.error(err);
  }

  console.log("Authenticated");

  conn.streaming.topic(TOPIC).subscribe(function (message) {
    if (message.event !== undefined && message.event.type !== undefined) {
      console.log("Event Type : " + message.event.type);
    }
    if (
      message.event !== undefined &&
      message.event.createdDate !== undefined
    ) {
      console.log("Event Created : " + message.event.createdDate);
    }
    if (message.sobject !== undefined && message.sobject.Id !== undefined) {
      console.log("Object Id : " + message.sobject.Id);
    }
    console.log("Event : " + JSON.stringify(message));
  });
});
