(function(){
  let demoData = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);
  console.log(obj);

  /*
    EXERCISE 01:
    Rewrite this to make it *loop* through all the lecturers' names.
    (Note the ES6 'template literal' syntax):
  */

  var theData = "";

  for(var i = 0; i < 5; i++) {
    let theData =  `${obj.lecturers[i].firstName} ${obj.lecturers[i].lastName}`;
    demoData.innerHTML = theData;
  }


  // for (var i in obj) {
  //   let theData =  `${obj.lecturers[i].firstName} ${obj.lecturers[i].lastName}`;
  //   console.log(i);
  // }



  // populates the chosen element's content with the data:


  /*
    EXERCISE 02:
    Once you have looped through all the data, present the
    results on the page, styled with CSS.
  */
}());
