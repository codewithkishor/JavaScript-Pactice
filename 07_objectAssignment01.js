const professor = {
  name: "Prof Balaram",
  age: 30,
  height: 190,
  // degree: {
  //   engineering: "CSC",
  //   PHD: "Adv Computing",
  //   MBA: "Adv in C",
  // },
  certificates: {
    hackerRank: "2nd",
    presentation: "3rd",
    advProgramming: "1st",
  },
  add: function () {
    return this.certificates.hackerRank + this.presentation;
  },
};
const totalCertificates = professor.certificates.add();
console.log(totalCertificates);
