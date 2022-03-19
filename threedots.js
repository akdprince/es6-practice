const ages = [12, 11, 13, 14];
const ages1 = [14, 15, 16, 10];
const ages2 = [25, 26, 24, 22];

const allAges = ages.concat(ages1).concat([5]).concat(ages2); //difficult 
const allAges2 = [...ages, ...ages1, 5, ...ages2]; //easy

// console.log(allAges2);
// console.log(allAges);

const businessMan = 650;
const amlaMan = 1100;
const minister = 850;
const maximumNumber = [114,254,25254,1542,25874];

const maximum = Math.max(...maximumNumber);
// const maximum = Math.max(businessMan, amlaMan, minister);

console.log(maximum);