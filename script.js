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
let finish = document.getElementById('add');
let begin = document.getElementById('begin');
let restart = document.getElementById('restart');
let good = 0;

console.log(good);
button.addEventListener('click', function (e) {
  e.preventDefault();

  if (nameCard.value) {
    good++;
    document.querySelector('.advice_name').style.color = '#ffff';
    document.querySelector('#nameCard').style.border =
      '1px solid hsl(278, 68%, 11%)';
  } else {
    document.querySelector('.advice_name').style.color = '#dc7270';
    document.querySelector('#nameCard').style.border = '1px solid #dc7270';
  }
  if (!isNaN(numCard.value) && numCard.value) {
    document.querySelector('.advice_num').style.color = '#ffff';
    document.querySelector('#numCard').style.border =
      '1px solid hsl(278, 68%, 11%)';
    good++;
  } else {
    document.querySelector('.advice_num').style.color = '#dc7270';
    document.querySelector('#numCard').style.border = '1px solid #dc7270';
  }

  if (
    !isNaN(monthsCard.value, yearsCard.value) &&
    monthsCard.value &&
    yearsCard.value &&
    monthsCard.value <= 12
  ) {
    document.querySelector('.advice_time').style.color = '#ffff';
    document.querySelector('#yearsCard').style.border =
      '1px solid hsl(278, 68%, 11%)';
    document.querySelector('#monthsCard').style.border =
      '1px solid hsl(278, 68%, 11%)';
    good++;
  } else {
    document.querySelector('.advice_time').style.color = '#dc7270';
    document.querySelector('#yearsCard').style.border = '1px solid #dc7270';
    document.querySelector('#monthsCard').style.border = '1px solid #dc7270';
  }

  if (
    !isNaN(cvcCard.value) &&
    cvcCard.value &&
    cvcCard.value >= 100 &&
    cvcCard.value <= 999
  ) {
    document.querySelector('.advice_cvc').style.color = '#ffff';
    document.querySelector('#cvcCard').style.border =
      '1px solid hsl(278, 68%, 11%)';
    good++;
  } else {
    document.querySelector('.advice_cvc').style.color = '#dc7270';
    document.querySelector('#cvcCard').style.border = '1px solid #dc7270';
  }
  console.log(good);
  if (good == 4) {
    nameCardFace.value = nameCard.value;
    cvcCardFace.value = cvcCard.value;
    dateCardFace.value = monthsCard.value + '/' + yearsCard.value;
    numCardFace.value = numCard.value;
    begin.style.display = 'none';
    finish.style.display = 'flex';

    console.log('Good Job');
  }
  setTimeout(() => {
    good = 0;
    console.log(good);
  }, 500);
});

restart.addEventListener('click', () => {
  location.reload();
});
