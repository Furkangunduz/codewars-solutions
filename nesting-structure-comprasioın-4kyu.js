Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // [1,[1,1]] not same as [[2,2],2]
    // [[1,1],1] not same as [[2,2],2]

    if (this.length != other.length) return false

    for (index in this) {
        if (Array.isArray(this[index]) && Array.isArray(other[index])) {
            return this[index].sameStructureAs(other[index])
        }
        if (Array.isArray(this[index]) && !Array.isArray(other[index])) return false

        if ((!Array.isArray(this[index]) && Array.isArray(other[index]))) return false
    }

    return true
}





console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]))