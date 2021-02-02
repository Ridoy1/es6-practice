const ages = [12, 14, 16, 33];
const ages2 = [23, 20, 11];
const ages3 = [40, 32, 33, 43];
const allAge = ages.concat(ages2).concat([5]).concat(ages3);
const allAge2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAge2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);