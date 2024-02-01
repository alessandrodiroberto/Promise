let $ = {
  get: function (url: string) {
    let p = new Promise(function (resolve, reject) {
      //alert('loaded');
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // ok
          resolve(xhr.responseText);
        } else {
          resolve("Error: " + xhr.status);
        }
      };
      xhr.onerror = function () {
        "use strict";
        reject("Error");
      };
    });

    return p;
  },
};

window.onload = function () {
  $.get("http://localhost:8000/index.php")
    .then((res: any) => {
      let obj = JSON.parse(res);
      console.log(obj);

      let ul = "<ul>";
      ul += obj.map((book: any) => "<li>" + book.title + "</li>");
      ul += "</ul>";
      (document.querySelector("#content") as HTMLElement).innerHTML = "";
    })
    .catch((error) => {
      console.log(error);
    });
};
