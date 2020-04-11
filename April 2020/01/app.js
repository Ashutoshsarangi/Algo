/**
 * @description Calculate the total Number of Island, 0--> Water
 * 1 ---> Land the land should have horizontal and vertical lands for island.
 */


a = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0]
];

// OutPut --> 2

/* a = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
];  */

// OutPut ---> 3
let count = 1;
let lastCluster = false;

function checkButtom(i, j) {
  if (i == a.length - 1) {
    return false;
  } else {
    if (a[i][j] == a[i + 1][j]) {
      return true;
    }
    else {
      return false;
    }
  }
}

function checkTop(i, j) {
  if (i == 0) {
    return false;
  } else {
    if (a[i][j] == a[i - 1][j]) {
      return true;
    }
    else {
      return false;
    }
  }
}

function checkLeft(i, j) {
  if (j == 0) {
    return false;
  } else {
    if (a[i][j] == a[i][j - 1]) {
      return true;
    }
    else {
      return false;
    }
  }
}

function checkRight(i, j) {
  if (j == a[0].length - 1) {
    return false;
  } else {
    if (a[i][j] == a[i][j + 1]) {
      return true;
    }
    else {
      return false;
    }
  }
}

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    if (a[i][j]) {
      if (checkButtom(i, j) || checkTop(i, j) ||
        checkLeft(i, j) || checkRight(i, j)) {
        lastCluster = true;
      } else {
        lastCluster = false;
        count += 1;
      }
    }
  }
}
if (lastCluster) {
  console.log(count + 1);
} else {
  console.log(count);
}
