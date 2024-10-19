let currentClock

function searchBackend() {
    console.log("request sent to backend")
}


function debouncedSearchBackend() {
    clearTimeout(currentClock) // stops the old clock and then
    // we start a clock for 30 ms
    currentClock = setTimeout(searchBackend, 30)// creates a new clock

}

debouncedSeachBackend()
debouncedSeachBackend()
debouncedSeachBackend()
debouncedSeachBackend()
debouncedSeachBackend()
debouncedSeachBackend()