/**
 * The main motive of creating this to create a generic Queue
 */
export class Queue {
    private queueArr: any = []
    constructor() {
    }
    /**
     * Here this method is requires for adding element in the Queue.
     * @param value the value is going to be added in the Queue
     * @returns it returns the Queue
     */
    public addElement = <T extends {}>(value: T): T => {
        this.queueArr.push(value);
        return this.queueArr
    }
    /**
     * Here this method is requires for remove element in the Queue.
     * @param value the value is going to be removed from the Queue
     * @returns it returns the Queue
     */
    public removeElement = <T extends {}>(): T => {
        this.queueArr.shift();
        return this.queueArr
    }
    /**
     * Here this method is requires for travers the Queue.
     */
    public traverseQueue = () => {
        this.queueArr.map((item) => {
            console.log(item);
        })
    }
}
