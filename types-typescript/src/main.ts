console.log('Hello TypeScript con platzi world!');

// Number
// Explicito
let phone:number;
phone = 1;
phone = 3124567892;
// phone = 'typescript'; // Error

// Inferido
let phoneNumber = 3145678912;
// phoneNumber = true; // Error tipo de dato


let hex: number = 0xf00d; 
let binary : number = 0b100;
let octal : number = 0o744;

// Tipo: Boolean
// Tipado explicito
let isPro: boolean;
isPro = true;
// isPro = 1;

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; Error

// Strings
let username : string = 'luixaviles';
username = "Luis";
// username = true; // Error tipo de datos

// Template String
// Uso de back-tick ` 

let userInfo : string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Lopez'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);
