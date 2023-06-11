$(document).ready(function() {
  var imageList = $("#image-list");
  var images = [];

  // جلب جميع الصور في المجلد
  fetchImages();

  function fetchImages() {
    // احصل على قائمة الملفات في المجلد الحالي
    $.ajax({
      url: "./",
      success: function(data) {
        var files = $(data).find("a").map(function() { return $(this).attr("href"); }).get();

        // احصل على الصور فقط واحفظها في المصفوفة "images"
        images = files.filter(function(file) {
          return /\.(jpe?g|png|gif)$/i.test(file);
        });

        // عرض أسماء الصور
        displayImages();
      }
    });
  }

  function displayImages() {
    images.forEach(function(image) {
      var listItem = $("<li></li>").text(image);
      imageList.append(listItem);
    });
  }
});










