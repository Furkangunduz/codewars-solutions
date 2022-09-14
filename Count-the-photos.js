//didnt pass bcz of time complexity

function countPhotos(road) {
    let count = 0;
    for (let i = 0; i < road.length; i++) {
        if (road[i] === ".") {
            for (let j = 0; j < i; j++) {
                if (road[j] === ">") {
                    count++;
                }
            }
            for (let j = i + 1; j < road.length; j++) {
                if (road[j] === "<") {
                    count++;
                }
            }
        }
    }
    return count
}

console.log(countPhotos(".><.>>.<<"))