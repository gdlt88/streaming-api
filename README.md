## How to use this script
- First do `npm install`
- Create .env file in the main folder with the following parameters:
  ```
  USERNAME=<Salesforce username>
  PASSWORD=<Salesforce user password>
  SECURITY_TOKEN=<Salesforce user security token>
  LOGIN_URL=<https://login.salesforce.com if you are going to connect to a production org org https://test.salesforce org if you are going to connect to a sandbox>
  TOPIC=<Name of the push topic that you want to subscribe to e.g. NweAccount>
  ```
 - Execute the command `npm run start`
