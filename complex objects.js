let aliens = {
    name : "pop",
    regNo : 2012505016,
    depatment:"instrumentation engineer",
    cgpa:7.9,
    'campus interview':"failed",
    friend:{
        name : "prem",
        regNo : 2012505017,
        depatment:"instrumentation engineer",
        cgpa:9.9,
        'campus interview': "twitter"
    }

};


console.log(aliens.friend.cgpa)
console.log(aliens.friend)
console.log(aliens.friend['campus interview'].length)

