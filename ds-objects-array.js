function arrayToList(arr) {
  let list = null;

  for(let i = arr.length-1; i >= 0; i--) {
   list = {
    value: arr[i],
    rest: list
   }
  }
  return list;
}

function prepend(elem, list) {
  return {
    value: elem,
    rest: list
  }
}

function listToArray(list) {
  let arr = [];
  for(let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr
}

function nth(list, num) {
  let count = 0;
  while(list) {
    if(count == num) return list.value;
    else {
      list = list.rest;
      count++
    }
  }
}

function nthRecursive(list, num) {
  if(!list) return undefined
  else if(num == 0) return list.value
  else {
    return nthRecursive(list.rest, num-1)
  }
}

function deepEqual(obj1, obj2) {
  // shortcut: 
  // if(JSON.stringify(obj1) === JSON.stringify(obj2)) return true;

  if(obj1 === obj2) return true;
  if(obj1 == null || obj2 == null ||
    typeof obj1 != "object" ||
    typeof obj2 != "object") return false;

  let keysA = Object.keys(obj1),
      keysB = Object.keys(obj2);
  for(let key of keysA) {
    if(!keysB.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
