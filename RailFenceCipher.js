function encodeRailFenceCipher(string, numberRails) {
    let freq1 = numberRails + numberRails - 2;
    let freq2 = 0;
    let c = 0;
    let i = 0;
    let indx = 0;
    let res = "";
    while (true) {
        if (res.length == string.length) break;
        if (string[indx]) {
            res += string[indx];
            if (freq2) {
                if (c % 2 == 0) {
                    indx += freq1;
                } else {
                    indx += freq2;
                }
                c++;
            } else {
                indx += freq1;
            }
        } else {
            i++;
            indx = i;
            freq1 -= 2;
            freq2 += 2;

            if (freq1 <= 1) {
                freq1 = numberRails + numberRails - 2;
                freq2 = 0;
            }
        }
    }
    return res;
}
function decodeRailFenceCipher(string, numberRails) {
    let freq1 = numberRails + numberRails - 2;
    let freq2 = 0;
    let c = 0;
    let j = 0;
    let indx = 0;

    let res = new Array(string.length).fill("0");

    while (true) {
        if (!res.some((e) => e == "0")) return res.join("");
        for (
            let i = j;
            i <= string.length - 1 / freq1;
            i += !freq2 ? freq1 : c % 2 == 1 ? freq1 : freq2
        ) {
            res[i] = string[indx];
            indx++;
            if (freq2) c++;
        }
        j++;
        freq1 -= 2;
        freq2 += 2;
        if (freq1 <= 1) {
            freq1 = numberRails + numberRails - 2;
            freq2 = 0;
        }
    }
}
console.log(
    encodeRailFenceCipher(
        "re i,i Auusvas nr rbvnf rPeetai au odkuemmim c!  emD  sqieo ide  ci us et! audat aus mcutamneoeqtamvrtpsnnjearinp iieestxeie  on! imrsila u  fpcraii ertu  tes eiiosponip ei. uiieregufos tdaiacttxrVisineee lseatotriteud it,e tasnfrp ol o iriamo",
        24
    )
);
// console.log(decodeRailFenceCipher("WIREEEDSEEEACAECVDLTNROFO", 4));
