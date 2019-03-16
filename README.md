# ToccaExercise

Firebase DB Task
A Node.js application with Express to process Json data stored in the firebase DB

This Application demonstrates dealing with large data in json format to Perform Sorting and pagination.

Run the app locally
Requirements
Node Express 

Getting Started
To get the Node server running locally:

Clone this repo

Use your Command Line and navigate to the root folder of your project and enter

npm install to install all required dependencies

npm install
Start the node server:
node app.js
The Application runs on port 3000

Below are the details of the API implemented:

GET /api/data/ - method to return all the data given in the sample.json file (The reason for using GET over POST method is that, all the functionalities are retrieving data and not writing data into a datastore)

If the user reaches this endpoint without any request body, it returns the entire contents of the sample.json
Filter/Pagination/Sorting : The request body can contain either zero or any combination of filter, pagination or sorting. Based on the input provided by the user in the request body, it returns the results. The input should be in the json with the specified format below.

Input: With request body (an example as shown below) GET localhost:3000/api/users/

{"pagination" : {"size" : 2, "start" : 5}}

Output: The above example input sorts and then the pagination of size 5 and starting at index 5 is applied.

returns status 200ok with the appropriate json content.

This application has to be triggered from the command line with CURL or with browser or with applications like Postman.
