$(".tour-list").slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left'></i></button>",
   nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right'></i></button>",
   autoplay: true,
   responsive: [{
         breakpoint: 1025,
         settings: {
            slidesToShow: 2,
         },
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
         },
      },
   ],
});
$(".explore-list").slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left'></i></button>",
   nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right'></i></button>",
   // autoplay: true,
   responsive: [{
         breakpoint: 1025,
         settings: {
            slidesToShow: 2,
         },
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
         },
      },
   ],
});

//Custom Button
function inc(element) {
   let el = document.querySelector(`[name="${element}"]`);
   el.value = parseInt(el.value) + 1;
}

function dec(element) {
   let el = document.querySelector(`[name="${element}"]`);
   if (parseInt(el.value) > 0) {
      el.value = parseInt(el.value) - 1;
   }
}

var model = document.querySelector('.location-model')
var searchLocation = document.querySelector('.search-location')

searchLocation.onclick = function (event) {
   model.style.display = 'flex';
   event.stopPropagation();
}

window.onclick = function (event) {
   if (event.target.element == model || event.target.element == showPassengerModel) {
      // if(model.style.display == 'flex')
         model.style.display = 'none';
      // if(showPassengerModel.style.display== 'flex')
         showPassengerModel.style.display= 'none'
   }
}

let fillDatas = document.querySelectorAll('.item-detail')
for (const fillData of fillDatas) {
   fillData.onclick = function () {
      fillsquare(fillData);
      model.style.display = 'none';
   }
}

var inputData = document.getElementById('local')

function fillsquare(element) {
   let input = element.textContent;
   input = input.replace(/^\s+|\s+$/gm, ' ');
   input = input.trim();
   input = input.replace(/^\s+|\s+$/gm, ', ');
   inputData.value = input;
}

let showPassenger = document.querySelector('.search-pass')
let showPassengerModel = document.querySelector('.passenger-model')
let passengerIcon = document.querySelector('.passengerIcon')
showPassenger.onclick = function () {
   if (showPassengerModel.style.display == 'flex') {
      showPassengerModel.style.display = 'none';
      passengerIcon.classList.remove('fa-chevron-up');
      passengerIcon.classList.add('fa-chevron-down');
   } else {
      showPassengerModel.style.display = 'flex';
      passengerIcon.classList.remove('fa-chevron-down');
      passengerIcon.classList.add('fa-chevron-up');
   }
}
