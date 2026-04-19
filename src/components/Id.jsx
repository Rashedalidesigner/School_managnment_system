import React from 'react'

const Id = (type, count) => {

    const prefix = type === "Student" ? "STU" : type === "Teacher" ? "TEA" : type === "Class" ? "CLS" : type === "Assignment" ? "ASM" : type === "Fee" ? "FEE" : "USR";
    const idNumber = String(count + 1).padStart(3, '0');
    return `${prefix}${idNumber}`;

}

export default Id