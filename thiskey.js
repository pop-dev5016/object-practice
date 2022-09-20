
let aliens1 = {
    name : "pop",
    regNo : 2012505016,
    depatment:"instrumentation engineer",
    cgpa:9.2,
    compare:function(other){
        if (this.cgpa>other.cgpa)
        console.log(this);
    else
        console.log(other);
    },
    'campus interview':"failed",
    getcgpa:function(){
        console.log(this.cgpa);
    }

};


let aliens2 = {
    name : "prem",
    regNo : 2012505017,
    depatment:"instrumentation engineer",
    cgpa:9.1,
    'campus interview': "twitter",
    getcgpa:function(){
        console.log(this.cgpa);
    }
};


// aliens1.getcgpa()
// aliens2.getcgpa()

aliens2.compare(aliens1)


