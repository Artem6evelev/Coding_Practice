//* Exercise: Implement A Hash Table
// The idea that you gonna set grapes as a first index of array, and 10000 as a second

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0; //1. create a new variable
    for (let i = 0; i < key.length; i++) {
      // then we grab the length of key
      hash = (hash + key.charCodeAt(i) * i) % this.data.length; // add 0 + charCodeAt - it gives us an integer between zero and 65555.
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key); // where we want to store this information
    if (!this.data[address]) {
      this.data[address] = [];
      //   console.log(this.data); // (50) [empty × 23, Array(1), empty × 26]
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket); // [Array(2)]
    if (currentBucket) {
      // if there is something in a bucket
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          // grab first by index 0
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
        // console.log(this.data[i]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50); // memory size of 50
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("apples", 54));
console.log(myHashTable.set("oranges", 2));
console.log(myHashTable.keys()); // ['grapes', 'apples', 'oranges']
console.log(myHashTable.get("grapes")); // 10000
console.log(myHashTable.get("apples")); // 54
// console.log(myHashTable._hash("grapes")); // 23
