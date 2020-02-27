export class Sorter{
    constructor(public collection: /*TODO: fix me*/) {
        this.collection = collection
    }

    sort(): void {
        const len = this.collection.length
        for (let i=0; i<len; i++) {
            for(let j=0; j<len-i-1; j++) {
                if (this.collection[j] > this.collection[j+1]){
                    const temp = this.collection[j]
                    this.collection[j] = this.collection[j+1]
                    this.collection[j+1] = temp
                }
            }
        }
    }

}