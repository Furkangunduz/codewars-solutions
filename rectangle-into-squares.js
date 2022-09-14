function sqInRect(lng, wdth) {
    if (lng == wdth) return null
    let result = []

    while (true) {
        s
        if (wdth < lng) {
            result.push(wdth)
            lng -= wdth
        } else {
            result.push(lng)
            wdth -= lng
        }
        if (lng == 1 || wdth == 1) {
            result.push(1)
            result.push(1)
            break;
        }

    }
    return result
}

console.log(5, 3)