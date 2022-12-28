// Code your solution here

function findMatching(drivers, driver){
    return drivers.filter((person) => person.toLowerCase().includes(driver.toLowerCase()));
}

function fuzzyMatch(drivers, driver){
    return drivers.filter((person) => person.startsWith(driver))
}

function matchName(drivers, prop){
    return drivers.filter((driver)=> driver.name === prop)
}





















































// function findMatching(drivers, driver){
//     return drivers.filter((newDriver) => 
//     newDriver.toLowerCase().includes(driver.toLowerCase()))
// }

// function fuzzyMatch(arrayOfNames, firstTwoLetters){
//     const filteredArray = arrayOfNames.filter((name) => name.startsWith(firstTwoLetters));
//     console.log(filteredArray);
//     return filteredArray;
// }

// function matchName (objects, matchingString) {
//     const objectNames = objects.filter((names)=> names.name === matchingString);
//     console.log(objectNames);
//     return objectNames;
// }

