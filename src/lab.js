// Exercise 1: 
// Declare a variable of each type below and log them together in a single template literal string.
// 1. A variable of type null
// 2. A variable of type undefined
// 3. A variable of type string[] containing at least 3 items
const emptyValue = null;
const missingValue = undefined;
const technologies = ["TypeScript", "React", "Vite"];
console.log(`Null: ${emptyValue}, Undefined: ${missingValue}, Technologies: ${technologies.join(", ")}`);
function describeConsultant(consultant) {
    const specialisationText = consultant.specialisation ? ` specialising in ${consultant.specialisation}` : "";
    console.log(`${consultant.name} is a ${consultant.grade} consultant${specialisationText}.`);
}
const alice = {
    id: 1,
    name: "Alice",
    grade: "Senior",
    specialisation: "Cloud transformation",
};
const bob = {
    id: 2,
    name: "Bob",
    grade: "Analyst",
};
describeConsultant(alice);
describeConsultant(bob);
// 2. Use your ApiResponse interface to type a response containing a Consultant
//    (from Exercise 2) as the data.
const consultantResponse = {
    data: alice,
    success: true,
};
// 3. Use it again to type a response containing an array of numbers as the data.
const numberResponse = {
    data: [10, 20, 30],
    success: true,
};
console.log(consultantResponse);
console.log(numberResponse);
// Exercise 4: 
// 1. Write the `formatInput` function shown above. Add logic inside it
//    that detects whether the input is a string or a number using `typeof`.
//    Log the type received before returning the formatted string.
function formatInput(input) {
    if (typeof input === "string") {
        console.log("Received a string");
    }
    else {
        console.log("Received a number");
    }
    return `Formatted: ${input.toString()}`;
}
console.log(formatInput("abc"));
console.log(formatInput(123));
// 3. Write a function `getStatusColor` that accepts a ProjectStatus and
//    returns a color string for each status (your choice of colors).
function getStatusColor(status) {
    if (status === "active")
        return "green";
    if (status === "completed")
        return "blue";
    return "orange";
}
console.log(getStatusColor("active"));
console.log(getStatusColor("completed"));
console.log(getStatusColor("on-hold"));
// Exercise 5: 
// 1. Create the Status enum shown above.
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
})(Status || (Status = {}));
// 2. Log the numeric value of each enum key (Pending, InProgress, Completed).
console.log(Status.Pending);
console.log(Status.InProgress);
console.log(Status.Completed);
function formatProjectSummary(project) {
    return `${project.name}' (${project.status}) - led by ${project.lead.name}, a team of ${project.teamSize}`;
}
const projectCard = {
    name: "Client Portal Redesign",
    status: "active",
    lead: alice,
    teamSize: 4,
    onSelect: () => console.log("Projetc selected"),
};
console.log(formatProjectSummary(projectCard));
projectCard.onSelect();
export {};
