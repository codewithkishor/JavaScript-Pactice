console.log(`Create a class ‘Bank’ with all possible data members in such as way that all properties
should be initialized using constructor.`);

class Bank {
  constructor(bankName, location, acNo, ifsc, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.acNo = acNo;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
  }
}
const axisBank = new Bank("Axis Bank", "Pune", 901001244589, 410489, "7.5%");
const sbiBank = new Bank("SBI Bank", "CHAKAN", 90146889589, 412501, "6.5%");
const iciciBank = new Bank("ICIC Bank", "PERU", 925681245689, 416251, "5.5%");
const kotakBank = new Bank(
  "KOTAK Bank",
  "KATRAJ",
  901125444589,
  410522,
  "4.5%"
);
const hdfcBank = new Bank("HDFC Bank", "MOSHI", 90101445589, 410545, "6.5%");
const panjabBank = new Bank(
  "PANJAB Bank",
  "SWARGATE",
  9014897244589,
  410489,
  "7.5%"
);

const arrayOfBanks = [
  axisBank,
  sbiBank,
  iciciBank,
  kotakBank,
  hdfcBank,
  panjabBank,
];

for (const bank of arrayOfBanks) {
  console.log(
    `Bank details are Bank Name ${bank.bankName} and Location is ${bank.location}`
  );
}

for (const bank of arrayOfBanks) {
  if (bank.bankName == "KOTAK Bank") {
    console.log(
      `Bank with kotak Bank Name ${bank.bankName} and Location is ${bank.location}`
    );
  }
}

for (let bank = 0; bank < arrayOfBanks.length; bank++) {
  const element = arrayOfBanks[bank];
  console.log(element);
}
