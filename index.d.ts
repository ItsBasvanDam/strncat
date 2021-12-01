/**
 * Appends the first num characters of source to destination.
 * 
 * If the length of the source string is less than num, only the content up to the end is copied.
 * @param {string} destination The destination string.
 * @param {string} source The string to be appended.
 * @param {number} num Maximum number of characters to be appended.
 * @returns {string}
 */
export function strncat(destination: string, source: string, num: number): string;