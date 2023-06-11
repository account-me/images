window.onload = function() {
  var imageList = document.getElementById("image-list");
  var images = [];

  // قم بجلب جميع الصور في المجلد
  fetchImages();

  function fetchImages() {
    // احصل على قائمة الملفات في المجلد الحالي
    fetch('./')
      .then(response => response.text())
      .then(data => {
        var parser = new DOMParser();
        var html = parser.parseFromString(data, 'text/html');
        var files = Array.from(html.getElementsByTagName('a')).map(a => a.getAttribute('href'));
        
        // احصل على الصور فقط واحفظها في المصفوفة "images"
        images = files.filter(file => /\.(jpe?g|png|gif)$/i.test(file));
        
        // عرض أسماء الصور
        displayImages();
      });
  }

  function displayImages() {
    images.forEach(image => {
      var listItem = document.createElement("li");
      listItem.textContent = image;
      imageList.appendChild(listItem);
    });
  }
};

