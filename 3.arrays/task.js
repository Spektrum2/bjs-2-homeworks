function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((item, idx) => item === arr2[idx])
}

function getUsersNamesInAgeRange(users, gender) {
    if(!users.length || gender !== 'женский' && gender !== 'мужской'){
        return 0
    }
   return  users
        .filter((item) => item.gender === gender)
        .map((item) => item.age)
        .reduce((acc, item, idx, arr) => {
            if (idx === arr.length - 1) {
                return (acc + item) / arr.length;
            } else {
                return acc + item;
            }
        })
}

