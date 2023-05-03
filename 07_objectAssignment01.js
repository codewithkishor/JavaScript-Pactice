const professor = {};

professor.name = "Prof Balaram";
professor.age = 30;
professor.height = 190;
professor.degree = {
  engineering: "CSC",
  PHD: "Adv Computing",
  MBA: "Adv in C",
};

professor.certificates = {
  hackerRank: "2nd",
  presentation: "3rd",
  advProgramming: "1st",
};

let add = function () {
  let concatCert = professor.degree.concat(professor.certificates);
  console.log(concatCert);
};
professor.add();
console.log(professor);
