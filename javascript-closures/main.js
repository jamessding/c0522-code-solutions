function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
console.log(medicalSchool);
console.log(lawSchool);

console.log(medicalSchool('James Ding'));
console.log(lawSchool('James Ding'));
