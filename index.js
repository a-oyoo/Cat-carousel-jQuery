'use strict';


function changeImage() {
  $('.thumbnails').on('click', '.thumbnail', function(event) {
    //console.log(this);
    //save reference to image source
     const imageSrc = $(this).find('img').attr('src'); 
    // save reference to image alt 
     const imageAlt = $(this).find('img').attr('alt');
    // change the image source and alt to thumbnail
    $('.hero img').attr('src', imageSrc).attr('alt', imageAlt);
    
  });
}

$(changeImage);



