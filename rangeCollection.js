/**
 * RangeCollection class
 */
class RangeCollection {

    constructor() {
        this.range = [];
    }

    /**
     * Find index of target
     * @param {number} target
     * @return {number} index - Index or Closest index
     */
    _findIndexOrClosestIndex(target) {
        let arr = [...this.range];
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (arr[mid] === target) {
                return mid;
            }
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    /**
     * Find index
     * @param {number} target
     * @return {number} index - Index
     */
    _findIndex(target) {
        let arr = [...this.range];
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (arr[mid] === target) {
                return mid;
            }
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    /**
     * Adds a range to the collection
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add([firstNumber, lastNumber]) {
        const firstIndex = this._findIndexOrClosestIndex(firstNumber);
        let i = 0;
        while (firstNumber <= lastNumber - 1) {
            if (this._findIndex(firstNumber) === -1) {
                this.range.splice(firstIndex + i, 0, firstNumber);
            }
            firstNumber++;
            i++;
        }
    }

    /**
     * Removes a range from the collection
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    remove([firstNumber, lastNumber]) {
        this.range = this.range.filter(current => !(current >= firstNumber && current < lastNumber));
    }

    /**
     * Prints out the list of ranges in the range collection
     */
    print() {
        let result = ``;
        let startIndex = 0;
        let i = 1;
        while(i < this.range.length - 1) {
            const current = this.range[i];
            const prev = this.range[i - 1];
            if (current - prev !== 1) {
                result += `[${this.range[startIndex]}, ${prev + 1}) `;
                startIndex = i;
            }
            i++;
        }
        const lastInterval = `[${this.range[startIndex]}, ${this.range[i] + 1})`;
        return result + lastInterval;
    }
}

module.exports = RangeCollection;