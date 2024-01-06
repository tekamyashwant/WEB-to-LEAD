function beforeSubmit() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log(inputdate.value);

  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
  outputdate.value = formattedDate;
}
