var codes = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ",",
    "...---...": "SOS",
};
String.prototype.replaceAll = function (match, replace) {
    return this.replace(new RegExp(match, "g"), () => replace);
};

var decodeBits = function (bits) {
    bits = bits.replace(/^0+|0+$/g, "");
    console.log("bits => ", bits, "  ");
    let count = 0;
    for (let i = bits.indexOf("1"); i < bits.length; i++) {
        if (bits[i] == "0") break;
        count++;
    }

    // let timeUnit =
    //     bits.includes("0") && (count == 6 || count == 2)
    //         ? 2
    //         : bits.includes("0") && (count == 3 || count == 1)
    //         ? 1
    //         : count;

    let timeUnit =
        bits.includes("0") && (count == 15 || count == 5)
            ? 5
            : bits.includes("0") && (count == 12 || count == 4)
            ? 4
            : bits.includes("0") && (count == 9 || count == 3)
            ? 3
            : bits.includes("0") && (count == 6 || count == 2)
            ? 2
            : bits.includes("0") && (count == 3 || count == 1)
            ? 1
            : count;

    console.log("timeUnit ", timeUnit);

    return timeUnit != 0
        ? bits
              .replaceAll("000000".repeat(timeUnit), "   ")
              .replaceAll("000".repeat(timeUnit), " ")
              .replaceAll("111".repeat(timeUnit), "-")
              .replaceAll("1".repeat(timeUnit), ".")
              .replaceAll("0".repeat(timeUnit), "")
        : bits.replaceAll("1".repeat(count), ".").replaceAll("0", "");
};

var decodeMorse = function (morseCode) {
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode
        .split("   ")
        .map((a) =>
            a
                .split(" ")
                .map((b) => codes[b])
                .join("")
        )
        .join(" ")
        .toUpperCase()
        .trim();
};

console.log(
    decodeBits(
        "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
    )
);
