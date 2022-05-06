function findTrailingZeroLength(n) {
    let a = 0;
    while (!n[n.length - 1]) {
        n = n.slice(0, n.length - 2);
        a++;
    }
    return a;
}
function multiply(n, o) {
    let nDecimal = n.includes(".") ? n.split(".")[1] : "";
    let nFull = n.replace(".", "");
    let nDecimalLen = nDecimal.length;

    let oDecimal = o.includes(".") ? o.split(".")[1] : "";
    let oFull = o.replace(".", "");
    let oDecimalLen = oDecimal.length;

    let totaldecimallen = oDecimalLen + nDecimalLen;

    let multipliedVal = "" + BigInt(oFull) * BigInt(nFull);
    let trailingZeros = findTrailingZeroLength(multipliedVal);
    let dotPosition =
        totaldecimallen == 0
            ? 0
            : multipliedVal.length - (totaldecimallen + trailingZeros);

    let res =
        multipliedVal == "0"
            ? "0"
            : dotPosition == 0
            ? multipliedVal
            : dotPosition > 0
            ? multipliedVal.slice(0, dotPosition) +
              "." +
              multipliedVal.slice(dotPosition).replace(/0+$/, "")
            : "0." +
              "0".repeat(-dotPosition) +
              multipliedVal.replace(/0+$/, "");
    return res.replace(/\.$/, "");
}
