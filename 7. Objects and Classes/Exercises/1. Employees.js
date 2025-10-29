function solve(employeesArr){
    class Employee{
        constructor (name, personalNum){
            this.name = name;
            this.personalNum = personalNum;
        }
    }

    let employeesArrOfObj = [];

    for(let employeeStr of employeesArr){
        let currentEmployee = new Employee(employeeStr, employeeStr.length);

        employeesArrOfObj.push(currentEmployee);
    }

    for(let currentEmployeeObj of employeesArrOfObj){
        console.log(`Name: ${currentEmployeeObj.name} -- Personal Number: ${currentEmployeeObj.personalNum}`);
    }
}

solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);