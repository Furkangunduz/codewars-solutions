function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        console.log("encoding, ", str)
        console.log("key, ", key)
        console.log("abc", abc)
        let result = ""

        for (let i = 0; i < str.length; i++) {
            let indexForKey = i % key.length;
            if (!abc.includes(str[i])) {
                result += str[i]
                continue
            }
            let indexOfChar = abc.indexOf(str[i])
            let indexOfKey = abc.indexOf(key[indexForKey])

            console.log("str ", str[i], indexOfChar)
            console.log("key ", key[indexForKey], indexOfKey)
            console.log("crypted", abc[((indexOfChar + indexOfChar) % abc.length)])
            console.log("***")

            result += abc[((indexOfChar + indexOfKey) % abc.length)]
        };
        return result;
    }
    this.decode = function (str) {
        console.log("decoding, ", str)
        console.log("key, ", key)
        console.log("abc", abc)
        let result = ""

        for (let i = 0; i < str.length; i++) {
            let indexForKey = i % key.length;
            if (!abc.includes(str[i])) {
                result += str[i]
                continue
            }
            let indexOfChar = abc.indexOf(str[i])
            let indexOfKey = abc.indexOf(key[indexForKey])

            console.log("str ", str[i], indexOfChar)
            console.log("key ", key[indexForKey], indexOfKey)
            console.log("uncrypted", abc[((indexOfChar + indexOfKey) % abc.length)])
            console.log("***")

            result += abc[((indexOfChar - indexOfKey + abc.length) % abc.length)]
        };
        return result;
    };
}

abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);

console.log(c.decode('rovwsoiv'))

//rovwsoiv