window.onload = function() {
  var pubList = document.querySelector(".publication-list");
  var pubArr = pubList.querySelectorAll(".publication");
  var yearDropDown = document.querySelector(".dropdown-menu");
  var yearDropDownItems = yearDropDown.querySelectorAll(".dropdown-item");
  addDropItemEvent();

  function addDropItemEvent() {
    yearDropDownItems.forEach(function(v) {
      v.addEventListener("click", function() {
        sortYear(v.dataset.sortBy);
      });
    })
  }

  function sortYear(year) {
    pubArr.forEach(
      function(v) {
        //console.log(v.dataset);
        if(v.dataset.pubYear != year.toString()) {
          //console.log("this was published in " + v.dataset.pubYear);
          v.classList.add("inactive");
        } else {
          v.classList.remove("inactive");
        }
      }
    )
  }
}
