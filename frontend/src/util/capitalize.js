/* Capitalize word
 *  myWord -> MyWord */

export const capitalize = (word = '') =>
  word.charAt(0).toUpperCase() + word.slice(1)
