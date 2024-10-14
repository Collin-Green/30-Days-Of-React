//1.
class Statistics{
    constructor(arr){
        this.arr = arr;
    }
    count(){
        return this.arr.length;
    }
    sum(){
        return this.arr.reduce((acc, curr) => acc + curr);
    }
    min(){
        return this.arr.reduce((acc, curr) => (curr < acc) ? curr : acc);
    }
    max(){
        return this.arr.reduce((acc, curr) => (curr > acc) ? curr : acc);
    }
    range(){
        return this.max() - this.min();
    }
    mean(){
        return this.sum() / this.count();
    }
    median(){
        const sorted = this.arr.sort((a, b) => a - b);
        return (this.count()%2===0)
        ? (this.arr[Math.floor(this.count()/2)] + this.arr[(Math.floor(this.count()/2)) + 1]) / 2
        : this.arr[Math.floor(this.count()/2)]; 
    }
    freqMap(){
        const f_map = new Map();
        for (let num of this.arr){
            f_map.set(num, f_map.get(num) ? f_map.get(num) + 1 : 1);
        }
        return f_map;
    }
    mode(){
        const mode_map = this.freqMap();
        let c = 1;
        let val = this.arr[0];
        for (const [num, count] of mode_map.entries()){
            if (count > c){
                c = count;
                val = num;
            }
        }
        return [val, c];
    }
    var(){
        let numerator = 0;
        for (let num of this.arr){
            numerator += (num - this.mean()) ** 2;
        }
        return numerator / this.count();
    }
    std(){
        return Math.sqrt(this.var());
    }
    freqDist(){
        const f_map = this.freqMap();
        const freq_arr = new Array();
        for (const [num, count] of f_map.entries()){
            let new_f = [count/this.count() * 100, num];
            freq_arr.push(new_f);    
        }
        return freq_arr;
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const stats = new Statistics(ages);
console.log('Count: ', stats.count());
console.log('Sum: ', stats.sum());
console.log('Min: ', stats.min());
console.log('Max: ', stats.max());
console.log('Range: ', stats.range());
console.log('Mean: ', stats.mean());
console.log('Median: ' , stats.median());
console.log('Mode: ', stats.mode());
console.log('Variance: ', stats.var());
console.log('Standard Deviation: ', stats.std());
console.log('Freqency Distribution: ', stats.freqDist());
