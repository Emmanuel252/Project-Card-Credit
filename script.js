let numCardFace = document.getElementById('numCardFace');
let nameCardFace = document.getElementById('nameCardFace');
let dateCardFace = document.getElementById('dateCardFace');
let cvcCardFace = document.getElementById('cvcCardFace');
let nameCard = document.getElementById('nameCard');
let numCard = document.getElementById('numCard');
let monthsCard = document.getElementById('monthsCard');
let yearsCard = document.getElementById('yearsCard');
let cvcCard = document.getElementById('cvcCard');
let button = document.getElementById('button');
button.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    !isNaN(
      monthsCard.value,
      yearsCard.value,
      cvcCard.value,
      numCard.value && nameCard
    ) &&
    monthsCard.value &&
    yearsCard.value &&
    cvcCard.value &&
    numCard.value &&
    nameCard.value
  ) {
    dateCardFace.value = monthsCard.value + '/' + yearsCard.value;
    cvcCardFace.value = cvcCard.value;
    numCardFace.value = numCard.value;
    nameCardFace.value = nameCard.value;
  } else {
    console.log('False');
  }
});
