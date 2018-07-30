var searchLink = document.querySelector('.button--open-form');
var searchPopup = document.querySelector('.modal');

if (searchLink && searchPopup) {
  var searchForm = searchPopup.querySelector('.form');
  var inputDate = searchForm.querySelectorAll('.field__input');
  var QuantityAdults = searchForm.querySelector('.spinner__input--required');
  var spinnerButtonUp = searchForm.querySelectorAll('.spinner__button--up');
  var spinnerButtonDown = searchForm.querySelectorAll('.spinner__button--down');
  var inputQuantity = searchForm.querySelectorAll('.spinner__input');
  var spinQuantity = function (increase, decrease, input) {
    increase.addEventListener('click', function (evt) {
        evt.preventDefault();
        input.value++;
      }
    );
    decrease.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (input.value > 0) {
          input.value--;
        }
      }
    );
  };

  var highlightingEmptyField = function (field, inputSpinner) {
    if (!field.value) {
      field.style.outline = '2px solid #d28181';
    }

    if (!inputSpinner.value || inputSpinner.value < 1) {
      inputSpinner.style.outline = '2px solid #d28181';
    }
  };

  searchLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      searchPopup.classList.toggle('modal--show');
      if (!searchPopup.classList.contains('modal--show')) {
        searchPopup.classList.remove('modal--error');
      }
    }
  );

  for (var i = 0; i < spinnerButtonUp.length; i++) {
    spinQuantity(spinnerButtonUp[i], spinnerButtonDown[i], inputQuantity[i]);
  }

  searchForm.addEventListener('submit', function (evt) {
        for (var j = 0; j < inputDate.length; j++) {
          if (!inputDate[j].value || !QuantityAdults.value || QuantityAdults.value < 1) {
            evt.preventDefault();
            searchPopup.classList.remove('modal--error');
            searchPopup.offsetWidth = searchPopup.offsetWidth;
            searchPopup.classList.add('modal--error');
            highlightingEmptyField(inputDate[j], QuantityAdults);
          }
        }
      }
    );

  window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        searchPopup.classList.remove('modal--show');
        searchPopup.classList.remove('modal--error');
      }
    }
  );

}
