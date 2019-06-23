# AutoFetcher for Saving IG Stories to GDrive

A Google App Script for deploying a web application that automatically fetches the latest avaliable IG Stories of a target Instagram user to your Google Drive.

## How to Use

1. New a App Script project in your Google account, and open the project in the App Script Editor.

2. Copy the scripts under the gascript folder to your App Script Editor.

3. Open `code.js` and replace the following variables with your own values, and save the file.

```js
// User-defined Variables
var g_username = 'your username for this app';
var g_password = 'your password for this app';
var gdrive_id = 'your google drive folder id for storing the downloaded files';
var lastlog_id = '<your google doc ID for storing last tracking log>';
var historylog_id = '<your google doc ID for storing history log>';
```

4. Deploy the updated App Script project as a web application, and authorize the app to read and write files in your Google Drive.

5. Copy the url of the deployed web application, like `https://script.google.com/<your-app-path>/exec?`

Now you can test the application by passing a url like this, `https://script.google.com/<your-app-path>/exec?usr=<app_username>&pwd=<app_password>&target=<target_ig_username>`.
The application will track and download the photos and videos to your Google Drive folder, if it finds any new IG stories of the target instagram account via storiesig.com.



## Configure an Auto-Run

1. At the end of the file `code.js`, make a copy the function `try_get()` and give it a new unique function name. and replace the `target` to the instagram account you're willing to fetch.

2. Go to your Google Developer Hub, and create a new trigger for this project.

3. In the Add Trigger Dialog, choose the function name that you previously copied. Also, select an appropiate time interval to call the function, as the example below.

![Setup a Google App Script Timed Trigger](/doc/setup_a_google_app_script_timed_trigger.png)