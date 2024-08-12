const number = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const resultContainer = document.getElementById('result-container');
const output = document.getElementById('output');

const romanNumberConvert = [
  {
    arabic: 1000,
    roman: "M"
  },
  {
    arabic: 900,
    roman: "CM"
  },
  {
    arabic: 500,
    roman: "D"
  },
  {
    arabic: 400,
    roman: "CD"
  },
  {
    arabic: 100,
    roman: "C"
  },
  {
    arabic: 90,
    roman: "XC"
  },
  {
    arabic: 50,
    roman: "L"
  },
  {
    arabic: 40,
    roman: "XL"
  },
  {
    arabic: 10,
    roman: "X"
  },
  {
    arabic: 9,
    roman: "IX"
  },
  {
    arabic: 5,
    roman: "V"
  },
  {
    arabic: 4,
    roman: "IV"
  },
  {
    arabic: 1,
    roman: "I"
  }
];

const romanNumber = (e) =>{
  e.preventDefault();
  
  const usersInt = parseInt(number.value);

  if(!usersInt || isNaN(usersInt)){
    resultContainer.style.display = "flex";
    output.innerText = "Please enter a valid number";
    return;
  }else if(usersInt < 1){
    resultContainer.style.display = "flex";
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }else if(usersInt > 3999 ){
    resultContainer.style.display = "flex";
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  
  let num = usersInt;
  let romanNumberConverts = "";
  for(let i = 0; i < romanNumberConvert.length; i++){
    while(num >= romanNumberConvert[i].arabic){
      romanNumberConverts += romanNumberConvert[i].roman;
      num -= romanNumberConvert[i].arabic;
    }
  }
  
  output.innerText = romanNumberConverts;
  resultContainer.style.display = "flex";
  number.value = "";
  return romanNumberConverts;
};
convertButton.addEventListener('click', romanNumber);

number.addEventListener('keydown', (e) => {
  if(e.key === "Enter"){
    romanNumber(e);
  }
});
