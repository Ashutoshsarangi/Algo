/**
 * @description SConverted Sorted Array to Convert BST
 * @param GOOGLE - CONVERT SORTED ARRAY TO BINARY SEARCH TREE (LeetCode)
 */

function TreeNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

let arr = [-10, -3, 0, 5, 9];
function convertBST(arr, start, end) {
  if (start > end) {
    return (null);
  }
  if (arr.length === 1) {
    return (new TreeNode(arr[0]));
  }

  let mid = Math.floor((start + end) / 2);
  let root = new TreeNode(arr[mid]);
  console.log('11111');
  root.left = convertBST(arr, start, mid - 1);
  console.log('222222');

  // console.log('End  -->, ',end);
  // console.log('Mid  -->, ',mid+1);

  console.log('33333');
  root.right = convertBST(arr, mid + 1, end);
  console.log('44444');


  return root;


}
console.log(convertBST(arr, 0, arr.length - 1));
