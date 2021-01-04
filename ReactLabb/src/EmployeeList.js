import {useEffect, useState} from "react";
import Employee from "./Employee";

function EmployeeList() {
    const [employees, setEmployees] = useState([
        {
            name: "Adam Johnson",
            email: "johnson9438@gmail.com",
            phone: "0703431299",
            skills: "React, JS, Java",
            avatar: "https://i.imgur.com/t9HFQvX.png",
        },
        {
            name: "Yazeen Jasim",
            email: "yazeen.jasim@softhouse.se",
            phone: "0700000000",
            skills: "React",
            avatar: "https://i.imgur.com/ebHfuth.png",
        },
    ]);

    function handleAddNewEmp(){
        setEmployees((prevState)=>{
            return [
                ...prevState,
                {
                    name: "Geralt of Rivia",
                    email: "geralt@live.se",
                    phone: "070321241",
                    skills: "murder",
                    avatar: "https://i.imgur.com/Q9qFt3m.png",
                },
            ];
        });
    }
    return (
        <div>
            <h3>EmployeeList</h3>
            <button onClick={handleAddNewEmp}>Add Employee</button>
            {employees.map((employee)=>(
                <Employee EmployeeData={employee} />
            ))}
        </div>
    );
}

export default EmployeeList;
