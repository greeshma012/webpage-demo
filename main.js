/*scroll head*/

window.addEventListener("scroll", function () {
    var header = document.getElementById("main-header");
    var headerContent = document.getElementById("header-content");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
                    header.classList.add("visible");
                } else {
                    header.classList.remove("visible");
                }
            });
/*closed scroll */


/*menu wrapper on header */
const menuIcon = document.querySelector(".menu-icon");
const links = document.querySelector(".link");

    menuIcon.addEventListener("click", () => {
                                        links.classList.toggle("show");
                                        });


                                        
/*menu close */

/*image zoom */
function zoomImage(imageSrc) {
  var zoomedImage = document.getElementById("zoomed-image");
  var zoomedImageContent = document.getElementById("zoomed-image-content");

  zoomedImageContent.src = imageSrc;
  zoomedImage.style.display = "block";
}

function closeZoomedImage() {
  var zoomedImage = document.getElementById("zoomed-image");
  zoomedImage.style.display = "none";
}


/*image zoom close */



/*cateogory */


/*cateogory close */
/*for smooth scroll */
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });
});

