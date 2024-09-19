function waitFor3Seconds(resolve) {
    console.log("inside waitfor3seconds")
    setTimeout(resolve, 3000)
}

function main() {
    console.log("main is called");
}

waitFor3Seconds(main);