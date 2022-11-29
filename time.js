//time
var time = new Date();
nam = time.getFullYear();
thang = time.getMonth()+1;
ngay = time.getDate();
str = ngay + "/" + thang + "/" + nam;
document.getElementById("date").innerHTML=str;

// back to top
// window.onscroll = function() {scrollFunction()};
//           function scrollFunction() {
//             if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//             document.getElementById("myBtn").style.display = "block";
//             } else {
//             document.getElementById("myBtn").style.display = "none";
//             }
//             }
//           document.getElementById('myBtn').addEventListener("click", function(){
//             document.body.scrollTop = 0;
//             document.documentElement.scrollTop = 0;
//           });

//carousel1
$('#carouselExampleInterval').on('slide.bs.carousel', function (e) {

  
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});
$('#carouselExampleInterval').carousel({
    interval: 1000
});



// carousel2-------------------
$('#carouselExampleControls').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
  });