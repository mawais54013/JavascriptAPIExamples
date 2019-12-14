// 1) API request using jquery with ajax

// POST request 
$.ajax("api url", {
    type: "POST",
    data: JSON.stringify({ data: "some data" }),
    contentType: "application/json",
}).done(function (data) {
    // some code to do with the data
}).fail(function (xhr, status, error) {
    // error message if the api does not work
});

// Shortcut POST request 
$.post("api url", function(data) {
    // do something with api
})


// GET Request
$.ajax({
    url: "api url",
    type: 'GET',
    dataType: 'json',
    success: function(res) {
        console.log(res);
    }
});


// 2) Using FETCH 

fetch(url)
.then((resp) => resp.json()) // Turn into json data
.then(function(data){
    // Here you can modify the data
})
.catch(function(error) {
    // catch the error
})

// POST request

const url = "url"

let data = "some data"

let fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
}

fetch(url, fetchData)
.then(function() {
    // do something with data
})
.catch(function(error) {
    // display error
})

// 3) Using Axios 

axios.get("url")
.then(function (response) {
    console.log(response)
    // do something with response
})
.catch(function (error) {
    // do something with error
})

// example POST request

axios.post('url', {
    data: "new data",
})
.then(function (response) {
    // do something with response
})
.catch(function (error) {
    // do something with error
})