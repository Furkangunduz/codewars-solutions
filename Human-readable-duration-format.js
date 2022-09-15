function formatDuration(seconds) {
    if (seconds < 0) throw new Error("Please provide non negative number as seconds.")
    if (seconds == 0) return "now";
    if (seconds < 60) return `${seconds} second`

    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneYear = oneDay * 365;

    let date = {
        year: Math.floor(seconds / oneYear),
        day: Math.floor((seconds % oneYear) / oneDay),
        hour: Math.floor((seconds % oneDay) / oneHour),
        minute: Math.floor((seconds % oneHour) / oneMinute),
        second: Math.floor((seconds % oneMinute))
    }

    let result = ""

    for (const [key, value] of Object.entries(date)) {
        if (value == 0) {
            continue
        }

        if (value == 1) result += ` ${value} ${key},`
        if (value > 1) result += ` ${value} ${key}s,`
    }
    if (result[result.length - 1] == ",") result = result.substring(0, result.length - 1)


    if (result.indexOf("and") == -1 && ((result.match(/,/g) || []).length) > 0) {
        result = result.substring(0, result.lastIndexOf(",")) + " and" + result.substring(result.lastIndexOf(",") + 1);
    }

    return result.trim()

}