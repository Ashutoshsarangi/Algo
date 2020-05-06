/**
 * The main motive of creating this to create a generic stack
 */
export class Stack {
    private stackArr: any = []
    constructor() {
    }
    /**
     * Here this method is requires for adding element in the stack.
     * @param value the value is going to be added in the stack
     * @returns it returns the stack
     */
    public addElement = <T extends {}>(value: T): T => {
        this.stackArr.push(value);
        return this.stackArr
    }
    /**
     * Here this method is requires for remove element in the stack.
     * @param value the value is going to be removed from the stack
     * @returns it returns the stack
     */
    public removeElement = <T extends {}>(): T => {
        this.stackArr.pop();
        return this.stackArr
    }
    /**
     * Here this method is requires for travers the stack.
     */
    public traverseStack = () => {
        this.stackArr.map((item) => {
            console.log(item);
        })
    }
}
