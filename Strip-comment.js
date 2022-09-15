function solution(input, markers) {
    console.log(input + "\n")
    input += "1"
    input = input.replace(/\n/g, '1');
    for (let i = 0; i < markers.length; i++) {
        while (input.includes(markers[i])) {
            let markerIndex = input.indexOf(markers[i])
            let lineAfterMarker = input.substring(markerIndex, input.length)
            let newLineIndex = lineAfterMarker.indexOf("1")
            let updatedLine = input.substring(0, markerIndex - 1) + input.substring(markerIndex + newLineIndex)
            input = updatedLine
        }
    }
    console.log(input.replace(/1/g, "\n").slice(0, input.length - 2))
    return input.replace(/1/g, "\n").slice(0, input.length - 1)
};