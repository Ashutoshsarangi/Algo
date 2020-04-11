/**
 * The main motive of creating this to create a generic Queue
 */
export class BInary {
    constructor() {
    }
    /**
     * Here this method is requires for adding element in the Queue.
     * @param value the value is going to be added in the Queue
     * @returns it returns the Queue
     */
    public searchElement = <T extends {}>(value: Array<T>, item: T): number => {
        let pos = 0;
        let end = value.length
        let mid = Math.floor(end / 2)
        if (item > value[mid]) {
            for (let i = mid; i < end; i++) {
                if (value[i] == item) {
                    return i
                }
            }
        } else if (item < value[mid]) {
            for (let i = 0; i < mid; i++) {
                if (value[i] == item) {
                    return i
                }
            }
        }
    }
}
