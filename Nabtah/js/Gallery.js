var fullImgBox = document.getElementById("fullImgBox");
            var fullImg = document.getElementById("fullImg");
            var galleryImages = document.querySelectorAll(".img-gallery img");
            var currentIndex = 0;

            function openFullImg(pic) {
                fullImgBox.style.display = "flex";
                fullImg.src = pic;

                for (var i = 0; i < galleryImages.length; i++) {
                    if (galleryImages[i].src === pic) {
                        currentIndex = i;
                        break;
                    }
                }
            }

            function closeFullImg() {
                fullImgBox.style.display = "none";
            }

            function navigateImage(direction) {
                currentIndex += direction;

                if (currentIndex < 0) {
                    currentIndex = galleryImages.length - 1;
                } else if (currentIndex >= galleryImages.length) {
                    currentIndex = 0;
                }

                fullImg.src = galleryImages[currentIndex].src;
            }