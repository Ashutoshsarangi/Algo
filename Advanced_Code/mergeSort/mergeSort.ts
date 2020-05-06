/**
 * The main motive of creating this to create a generic MergeSort
 */
export class MergeSort {
    private mainArr = []
    constructor() {
    }
    /**
     * Here this method is requires for adding element in the Queue.
     * @param value the value is going to be added in the Queue
     * @returns it returns the Queue
     */
    public sort = <T extends {}>(arr: Array<T>): Array<T> => {
        let leftArr: any = []
        let rightArr: any = []
        if (arr.length < 2)
            return arr
        let mid = (arr.length) / 2
        for (let i = 0; i < mid; i++) {
            leftArr.push(arr[i])
        }
        for (let j = mid; j < arr.length; j++) {
            rightArr.push(arr[j])
        }
        this.sort(leftArr);
        this.sort(rightArr);
        this.mainArr = this.merge(leftArr, rightArr, arr)
        return this.mainArr
    }
    /**
     * Here this method is requires for remove element in the Queue.
     * @param value the value is going to be removed from the Queue
     * @returns it returns the Queue
     */
    public merge = <T extends {}>(leftArray: Array<T>, rightArray: Array<T>, mainArray: Array<T>): Array<T> => {
        let i = 0;
        let j = 0;
        let k = 0;
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] < rightArray[j]) {
                mainArray[k] = leftArray[i]
                i += 1
            }
            else {
                mainArray[k] = rightArray[j]
                j += 1
            }
            k += 1
        }
        while (i < leftArray.length) {
            mainArray[k] = leftArray[i]
            i += 1
            k += 1
        }
        while (j < rightArray.length) {
            mainArray[k] = rightArray[j]
            j += 1
            k += 1
        }
        return mainArray
    }
}
