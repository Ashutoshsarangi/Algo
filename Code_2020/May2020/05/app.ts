/**
 * @description Need to go through the BSt from Youtube and try to implement it 
 * again, 
 * Need to have a solid grip on the Tree Concept.
 * Now It looks Great as like nested JSON structors.
 * @param It is Written in TypeScript.
 */

class TreeNode {
  private val = null;
  private left = null;
  private right = null;
  constructor(value: any) {
    this.val = value;
  }
}

let arr = [-10, -3, 0, 5, 9];
// let arr = [1,2,3,4,5,6,7];
function convertBST(arr: Array<number>, start: number, end: number) {
  if (start > end) {
    return (null);
  }
  if (arr.length === 1) {
    return (new TreeNode(arr[0]));
  }

  let mid = Math.floor((start + end) / 2);
  let root: any = new TreeNode(arr[mid]);
  root.left = convertBST(arr, start, mid - 1);
  root.right = convertBST(arr, mid + 1, end);

  return root;
}
console.log(convertBST(arr, 0, arr.length - 1));
