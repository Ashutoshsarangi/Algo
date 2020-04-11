/**
 * The main motive of creating this to create a generic Queue
 */
export class QuickSort {
    private partitionIndex = 0;
    constructor() {
    }
    /**
     * Here this method is requires for adding element in the Queue.
     * @param value the value is going to be added in the Queue
     * @returns it returns the Queue
     */
    public quickSort = <T extends {}>(value: Array<T>, start: number, end: number): Array<T> => {
        if (start < end) {
            this.partitionIndex = this.partition(value, start, end)
            this.quickSort(value, start, this.partitionIndex - 1)
            this.quickSort(value, this.partitionIndex + 1, end)
            return value
        }
    }
    public partition = <T extends {}>(value: Array<T>, start: number, end: number): number => {
        let pivot = value[end]
        let pIndex = start
        for (let i = start; i < end; i++) {
            if (value[i] <= pivot) {
                let temp = value[i]
                value[i] = value[pIndex]
                value[pIndex] = temp
                pIndex += 1
            }
        }
        let temp1 = value[pIndex]
        value[pIndex] = value[end]
        value[end] = temp1
        return pIndex
    }

}
