/*
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
differently when printed.
*/

const browserVersion = "Chrome"
getBrowserVersion()

function getBrowserVersion(){
    //var browserVersion = "firefox"
    //console.log(browserVersion)

    if (browserVersion == "Chrome"){
        //var browserVersion = "Version 130.0.6723.93 (Official Build) (64-bit)"
        let browserVersion = "Version 130.0.6723.93 (Official Build) (64-bit)"
        
    }
    console.log(browserVersion)
    console.log("done")
}

