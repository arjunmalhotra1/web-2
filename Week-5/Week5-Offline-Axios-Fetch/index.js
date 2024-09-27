// https://jsonplaceholder.typicode.com/posts/
// fetch() returns a promise. 
// .json() is an asynchronous function, that is just how the maintainers have written this function.

// Get request with fetch with promise.then
function main() {
    fetch ("https://jsonplaceholder.typicode.com/posts/")
    .then(async response => {
        const json = await response.json() // we knew that the type of the response is json.
        console.log(json.length)
        // await response.text() if the return type would have been text.
    })
}

main()

// Get request with fetch without promise.then
async function main2() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts/")
    const json = await response.json()
    console.log(json.length)
}
main2()

// Get request with Axios
const axios = require("axios")
async function main3() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/")
    // response.data is the final response from axios. "response.data" is the json data.
    console.log(response.data.length)
}
main3()

// Post request with fetch without promise.then
async function main4() {
    const response = await fetch("https://httpbin.org/post ",{
        method: "POST"
    })
    const json = await response.json()
    console.log("Post-fetch: ",json)
}

main4()

// Post request with axios
async function main5() {
    const response = await axios.post("https://httpbin.org/post")
    console.log("Post request axios: ",response.data)
}

main5()

// Post request with fetch without promise.then and Headers
async function main6() {
    const response = await fetch("https://httpbin.org/post ",{
        method: "POST",
        headers: {
            "Authorization": "Bearer 123"
        },
        body: {
            username: "test-username",
            password: "test-password",
        }
    })
    const json = await response.json()
    console.log("Post-fetch-with-headers: ",json)
}

main6()

// Post request with axios and headers
async function main7() {
    const response = await axios.post("https://httpbin.org/post",{
        body: {
            username: "test-username",
            password: "test-password",
        }
    },{
         headers: {
            "Authorization": "Bearer 123"
         }
    })
    console.log("Post request axios with headers: ",response.data)
}
main7()


