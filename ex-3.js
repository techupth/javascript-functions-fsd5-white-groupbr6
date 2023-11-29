//โจทย์กำหนดให้เวลาค่า Value ที่ใส่ลงไปใน parameter เป็น
//type Number แต่ว่าภาษา JS ไม่มีการกำหนด type ของparameter
//ดังนั้น จึงต้องตรวจสอบว่าเป็น number รึเปล่าในส่วนของ body
//มิเช่นนั้นอาจเกิดการนำ string มา + กันได้ หากใส่ค่าผิด type

let add = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  } else {
    return "please put number type argument";
  }
};

let subtract = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a - b;
  } else {
    return "please put number type argument";
  }
};

let multiply = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a * b;
  } else {
    return "please put number type argument";
  }
};
let divide = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a / b;
  } else {
    return "please put number type argument";
  }
};
