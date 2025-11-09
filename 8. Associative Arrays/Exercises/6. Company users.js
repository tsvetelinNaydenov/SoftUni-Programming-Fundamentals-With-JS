function solve(input){
    let companysMap = new Map();

    for (let companyTokens of input){
        let companyEmployeeArr = companyTokens.split(' -> ');
        let company = companyEmployeeArr[0];
        let employeeId = companyEmployeeArr[1];

        if(!companysMap.has(company)){
            companysMap.set(company, new Set([employeeId]));
        }
        else{
            let updatedEmployees = companysMap.get(company);
            updatedEmployees.add(employeeId);
        }
    }

    let sortedCompanys = Array.from(companysMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let currentCompany of sortedCompanys){
        let companyName = currentCompany[0];

        console.log(companyName);

        for (let employee of currentCompany[1]){
            console.log(`-- ${employee}`);
        }
    }
}

solve([
'SoftUni -> AA12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111']);