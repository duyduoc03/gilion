const time = new Data();
nam = time.getFullYear();
thang = time.getMonth();
ngay = time.getDate();
str = ngay + "/" + thang + "/" + nam;
document.getElementById("date").innerHTML=str;

//back to top
window.onscroll = function() {scrollFunction()};
          function scrollFunction() {
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("myBtn").style.display = "block";
            } else {
            document.getElementById("myBtn").style.display = "none";
            }
            }
          document.getElementById('myBtn').addEventListener("click", function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          });