$(".tour-list").slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left'></i></button>",
   nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right'></i></button>",
   autoplay: true,
});
$(".explore-list").slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left'></i></button>",
   nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right'></i></button>",
   // autoplay: true,
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

searchLocation.onclick = function () {
   model.style.display = 'flex';
}
window.onclick = function (event) {
   if (event.target == model) {
      model.style.display = "none";
   }
}

let fillDatas = document.querySelectorAll('.item-detail')
for(const fillData of fillDatas){
   fillData.onclick = function(){
      fillsquare()
   }
}

function fillsquare(input, output) {
   var area = area;
   var square = square;

   document.getElementById('local').value = input;
   document.getElementsByClassName('item-detail-name').value = output;
}