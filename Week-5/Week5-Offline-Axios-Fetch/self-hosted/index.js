// Post request with fetch without promise.then and Headers
async function main6() {
    const response = await fetch("https://httpdump.app/dumps/9d3de0e8-01af-4594-ac9d-10c33da14e45 ",{
        method: "POST",
        headers: {
            "Authorization": "Bearer 123-fetch"
        },
        body: {
            username: "test-username-fetch",
            password: "test-password-fetch",
        }
    })
    const json = await response.text()
    console.log("Post-fetch-with-headers: ",json)
}
main6()

const axios = require("axios")
// Post request with axios and headers
async function main7() {
    const response = await axios.post("https://httpdump.app/dumps/9d3de0e8-01af-4594-ac9d-10c33da14e45",{
        body: {
            username: "test-username-axios",
            password: "test-password-axios",
        }
    },{
         headers: {
            "Authorization": "Bearer 123-axios"
         }
    })
    console.log("Post request axios with headers: ",response.data)
}
main7()

// Post request with axios and headers Get request.
async function main8() {
    const response = await axios.get("https://httpdump.app/dumps/9d3de0e8-01af-4594-ac9d-10c33da14e45?a=b",{
         headers: {
            "Authorization": "Bearer 123-axios"
         }
    })
    console.log("Post request axios with headers: ",response.data)
}
main8()



