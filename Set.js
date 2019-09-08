class Set {
  constructor(list = []) {
    // Create a `values` property and set it equal to an empty array
    // Accept a `list` parameter (default to an empty array). Loop
    // through the array and insert each item into the set
    this.values = []

    let listToCheck = list

    // console.log(`this.values BEFORE attempt to insert: ${this.values}`);
    // console.log(`listToCheck: ${listToCheck}`);
    if (listToCheck.length > 0){
      for (let i = 0; i < listToCheck.length; i++) {
        // console.log(`listToCheck item to check: ${listToCheck[i]}`);
        this.insert(listToCheck[i])
      }
      // console.log(`this.values AFTER attempt to insert: ${this.values}`);
    }

    this.length = this.values.length
  }
  length() {
    // return the length of the values property
    console.log(`length test: ${this.values.length}`);
    return this.values.length
  }
  insert(val) {
    // if `val` is not in the `values` property, then push it in
    let found = false;

    for (let j = 0; j < this.values.length + 1; j++) {
      if (this.values[j] === val) {
        found = true;
      }
    }

    if (!found) {
      // console.log(`attempted to push`);
      this.values.push(val)
      return
    }
  }

  remove(val) {
    // if `val` is in the `values` property, then remove it
    for (let j = 0; j < this.values.length + 1; j++) {
      if (this.values[j] === val) {
        this.values.splice(j)
      }
    }
  }

  has(val) {
    // return true if `val` is in `values`, false if it isn't
    let found = false;

    for (let j = 0; j < this.values.length + 1; j++) {
      console.log(`i can has looped`);
      if (this.values[j] === val) {
        found = true;
      }
    }

    console.log(`did it find: ${found}`);

    return found
  }

  union(set) {
    // return a new Set with the values from this Set and the
    // Set passed in as a parameter

    let unionSet = new Set([...this.values]) //make new set with current set values
    let alreadyIn = false;

    for (let i = 0; i < set.values.length; i++) {
      for (let j = 0; j < unionSet.values.length; j++) {
        if (set.values[i] == unionSet.values[j]) {
          alreadyIn = true
        }
      }
      if (!alreadyIn) {
        unionSet.values.push(set.values[i])
      }
      alreadyIn = false
    }
    return unionSet
  }

  intersect(set) {
    // return a new Set of the values that appear in both this
    // Set and the Set passed in
    let intersectSet = new Set() //make new set with current set values
    for (let i = 0; i < set.values.length; i++) {
      if (this.has(set.values[i])) {
        intersectSet.values.push(set.values[i])
      }
    }
    return intersectSet
  }

  difference(set) {
    // return a new Set of the values that only appear in one of
    // the two sets
    
    let diffSet = new Set() //make new set with current set values

    for (let i = 0; i < this.values.length; i++) {
      if (!set.has(this.values[i])) {
        diffSet.values.push(this.values[i])
      }
    }

    for (let i = 0; i < set.values.length; i++) {
      if (!this.has(set.values[i])) {
        diffSet.values.push(set.values[i])
      }
    }

    return diffSet
  }
}

module.exports = {
  Set
};
