function submitClick() {
  let questions = {};

  let gender = [];
  let age = [];
  let shampoo = [];
  let perm = [];
  let dye = [];
  let scalpitem = [];
  let consider = [];

  gender.push($('input[name="gender"]:checked').val());
  questions.gender = gender;

  age.push($('input[name="age"]:checked').val());
  questions.age = age;

  shampoo.push($('input[name="shampoo"]:checked').val());
  questions.shampoo = shampoo;

  perm.push($('input[name="perm"]:checked').val());
  questions.perm = perm;

  dye.push($('input[name="dye"]:checked').val());
  questions.dye = dye;

  let condition = [];
  $('input[name="haircondition"]:checked').each((idx, item) => {
    condition.push($(item).val());
  });
  questions.condition = condition;

  let usingitem = [];
  $('input[name="usingitem"]:checked').each((idx, item) => {
    usingitem.push($(item).val());
  });
  questions.usingitem = usingitem;

  scalpitem.push($('input[name="scalpitem"]:checked').val());
  questions.scalpitem = scalpitem;

  consider.push($('input[name="consider"]:checked').val());
  questions.consider = consider;

  console.log(questions);
}
