const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// while文の処理
let n = -1;

while (n < 15) {
  n++;
  console.log(holidays[n]);
}


// for文の処理
for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
}