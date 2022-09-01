// Import the top=level function of express
const express=require('express');

//Creates an Express application using the top-level function
const app=express();

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response){
response.send('Hello. World!');
});

// Make the app listen on port 5500
app.listen(port, function(){
console.log('Server listening on http://localhost:'+port);
});

