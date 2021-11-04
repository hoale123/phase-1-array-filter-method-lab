// Code your solution here
// filter and return any name that matches the 2nd parameter (string)
function findMatching(listOfDriver, string) {
    return listOfDriver.filter(possibleMatch =>
        possibleMatch.toLowerCase() === string.toLowerCase()
        )
}

// filter out and return match that begin with provide letter.
function fuzzyMatch(name, letterString) {
    return name.filter( possibleMatch => 
        possibleMatch.toLowerCase().indexOf(letterString.toLowerCase()) === 0
        // make it to lower case and match only the first index [0] which is the first char.
        )
}

function matchName(name, soughtName) {
    return name.filter( possibleMatch => possibleMatch.name === soughtName)
  }


// string as argu // return all driver first letter match with provided letter