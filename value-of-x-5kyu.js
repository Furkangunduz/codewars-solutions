function valueOfX(eq) {
    let leftSide = eq.split("=")[0].split(" ");
    let rightSide = eq.split("=")[1].split(" ");

    if (leftSide.includes("x")) {
        for (let i = 0; i < leftSide.length; i++) {
            if (i == 0) {
                if (
                    leftSide[i] != "+" &&
                    leftSide[i] != "+" &&
                    leftSide[i] != "x"
                ) {
                    let s = "+" + " (-1 *" + leftSide[i] + ")";
                    rightSide.push(s);
                    leftSide[i] = "";
                }
            }
            if (leftSide[i] == "+" || leftSide[i] == "-") {
                if (leftSide[i + 1] == "x") {
                    continue;
                }
                let s = leftSide[i] + " (-1 *" + leftSide[i + 1] + ")";
                rightSide.push(s);
                leftSide[i] = "";
                leftSide[i + 1] = "";
            }
        }
        let res = eval(rightSide.join(""));
        if (leftSide.includes("-")) {
            return -1 * res;
        }
        return res;
    } else {
        for (let i = 0; i < rightSide.length; i++) {
            if (rightSide[i] == "+" || rightSide[i] == "-") {
                if (rightSide[i + 1] == "x") {
                    continue;
                }
                let s = rightSide[i] + " (-1 *" + rightSide[i + 1] + ")";
                leftSide.push(s);
                rightSide[i] = "";
                rightSide[i + 1] = "";
            }
        }
        let res = eval(leftSide.join(""));
        if (rightSide.includes("-")) {
            return -1 * res;
        }
        return res;
    }
}
console.log(valueOfX("10 + x = 77"));
