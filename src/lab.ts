// Exercise 1: 
// Declare a variable of each type below and log them together in a single template literal string.

// 1. A variable of type null
// 2. A variable of type undefined
// 3. A variable of type string[] containing at least 3 items

const emptyValue: null = null;
const missingValue: undefined = undefined;
const technologies: string[] = ["TypeScript", "React", "Vite"];

console.log(
  `Null: ${emptyValue}, Undefined: ${missingValue}, Technologies: ${technologies.join(", ")}`
);

// Exercise 2: 
// 1. Define an interface called `Consultant` with:
//    - id (number)
//    - name (string)
//    - grade ('Analyst' | 'Senior' | 'Manager')
//    - specialisation (optional string)

// 2. Create a function `describeConsultant` that accepts a Consultant
//    and logs a sentence describing them, e.g. "Alice is a Senior consultant."

// 3. Call the function with at least two different Consultant objects —
//    one with a specialisation and one without.

interface Consultant {
    id: number;
    name: string;
    grade: 'Analyst' | 'Senior' | 'Manager';
    specialisation?: string;
}

function describeConsultant(consultant: Consultant): void {
      const specialisationText = consultant.specialisation? ` specialising in ${consultant.specialisation}`: "";
      console.log(`${consultant.name} is a ${consultant.grade} consultant${specialisationText}.`);
}

const alice: Consultant = {
  id: 1,
  name: "Alice",
  grade: "Senior",
  specialisation: "Cloud transformation",
};

const bob: Consultant = {
  id: 2,
  name: "Bob",
  grade: "Analyst",
};

describeConsultant(alice);
describeConsultant(bob);

// Exercise 3: 
// 1. Create a generic interface called `ApiResponse<T>` that includes:
//    - a `data` field of type T
//    - a `success` boolean field
interface ApiResponse<T> {
    data: T;
    success: boolean;
}

// 2. Use your ApiResponse interface to type a response containing a Consultant
//    (from Exercise 2) as the data.
const consultantResponse: ApiResponse<Consultant> = {
    data: alice,
    success: true,
}

// 3. Use it again to type a response containing an array of numbers as the data.
const numberResponse: ApiResponse<number[]> = {
    data: [10,20,30],
    success: true,
}

console.log(consultantResponse);
console.log(numberResponse);

// Exercise 4: 
// 1. Write the `formatInput` function shown above. Add logic inside it
//    that detects whether the input is a string or a number using `typeof`.
//    Log the type received before returning the formatted string.
function formatInput(input: string | number): string {
  if (typeof input === "string") {
    console.log("Received a string");
  } else {
    console.log("Received a number");
  }

  return `Formatted: ${input.toString()}`;
}

console.log(formatInput("abc"));
console.log(formatInput(123));

// 2. Create a string literal union type `ProjectStatus` with the values:
//    'active' | 'completed' | 'on-hold'
type ProjectStatus = "active" | "completed" | "on-hold";


// 3. Write a function `getStatusColor` that accepts a ProjectStatus and
//    returns a color string for each status (your choice of colors).
function getStatusColor(status: ProjectStatus): string {
    if (status === "active") return "green";
    if (status === "completed") return "blue";
    return "orange";
}

console.log(getStatusColor("active"));
console.log(getStatusColor("completed"));
console.log(getStatusColor("on-hold"));

// Exercise 5: 
// 1. Create the Status enum shown above.
enum Status {
    Pending,
    InProgress,
    Completed
}

// 2. Log the numeric value of each enum key (Pending, InProgress, Completed).
console.log(Status.Pending);
console.log(Status.InProgress);
console.log(Status.Completed);

// 3. In a comment, write one sentence on when you'd choose an enum
//    over a string literal union type.
// Choose an enum if you want named constants with stable numeric values

// Exercise 6: 
// Define an interface called `ProjectCardProps` that would be used as props
// for a React component showing a consulting project. It should include:
//   - name (string)
//   - status (use your ProjectStatus type from Exercise 4)
//   - lead (a Consultant, from Exercise 2)
//   - teamSize (number)
//   - onSelect (a function that takes no arguments and returns void)

// Then write a function called `formatProjectSummary` that accepts a
// ProjectCardProps object and returns a one-line string summary, e.g.:
// "Client Portal Redesign (active) — led by Alice, team of 4"

interface ProjectCardProps {
    name: string;
    status: ProjectStatus;
    lead: Consultant;
    teamSize: number;
    onSelect: () => void;
}

function formatProjectSummary(project: ProjectCardProps): string {
    return `${project.name}' (${project.status}) - led by ${project.lead.name}, a team of ${project.teamSize}`;
}

const projectCard: ProjectCardProps = {
    name: "Client Portal Redesign",
    status: "active",
    lead: alice,
    teamSize: 4,
    onSelect: () => console.log("Projetc selected"),
};

console.log(formatProjectSummary(projectCard));
projectCard.onSelect();
