let employee = {
    empname:"scott",
    empId:233,
    basicSal:1000,
    bonus: function(){
        return((this.basicSal * 10)/100)
    }

};

res = employee.bonus()
console.log(res)