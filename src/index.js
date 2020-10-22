module.exports = function check(str, bracketsConfig) {
  
  //console.log("id18", bracketsConfig.map(item => item.reduce((result, element) => result.concat(element))));

  let arr1 = bracketsConfig.map(item => item.reduce((result, element) => result.concat(element)));

  //console.log("id19", arr1);

  function searchindex (str, arr) {
    //console.log("id34:", str, arr);
    for (let i=0; i < arr.length; i++) {
      //console.log("id33:", arr[i], str.indexOf(arr[i]));
      if (str.indexOf(arr[i]) != -1) { return true}
    }
    return false
  }
  let arr = str.split("");
  //console.log("id1:", arr);
   while (searchindex(str, arr1)) {

      for (let i=0; i < arr1.length; i++) {
            //console.log("id44:", arr1[i], str.indexOf(arr1[i]));

            if (str.indexOf(arr1[i]) != -1) {
                  arr.splice(str.indexOf(arr1[i]), 2);
                  //console.log("id99:",arr, str);
                  if (arr.length == 0) {return true}

                  str = arr.reduce((result, element) => result.concat(element));
                  //console.log("id22:",arr, str);
            } 
    

      }

   } 

  return false;
}
