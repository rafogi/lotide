const eqArrays = function(array1, array2){
  if(array1.length !== array2.length) {
    return false;
  };
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  };
  return true;
};

const assertArrayEqual = function(arr1, arr2) {
  if(eqArrays(arr1,arr2)){
    console.log(`${arr1} === ${arr2} , this solution passed`);
  }else {
    console.log(`${arr1} !== ${arr2} , this solution failed`);
    }

  };

  const flatten = function(arr){
    let newAr = []; 
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        for(let nums of arr[i]){
          newAr.push(nums);
        }
      } else {
        newAr.push(arr[i]);
      }
    }
    return newAr;
  }

  flatten([1, 2, [3, 4], 5, [6]]);

  assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);