class Sorter{
    collection: number[] | string

    constructor(collection: number[] | string) {
        this.collection = collection
    }

    sort(): void {
        const len = this.collection.length
        if (this.collection instanceof Array){
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

        if (this.collection instanceof String) {
            
        }
    }

}

var sorter = new Sorter([1, 3, 2, 5])
sorter.sort()
console.log(sorter.collection)
