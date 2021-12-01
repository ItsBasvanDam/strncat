/**
 * Appends the first num characters of source to destination.
 * 
 * If the length of the source string is less than num, only the content up to the end is copied.
 * @param {string} destination The destination string.
 * @param {string} source The string to be appended.
 * @param {number} num Maximum number of characters to be appended.
 * @returns {string}
 */
function strncat(destination, source, num) {
    if (typeof destination !== "string") throw new TypeError("[strncat] Destination must be a string");
    if (typeof source !== "string") throw new TypeError("[strncat] Source must be a string");
    if (typeof num !== "number") throw new TypeError("[strncat] Num must be a number");

    return destination.concat(source.substr(0, num));
}

module.exports = { strncat };