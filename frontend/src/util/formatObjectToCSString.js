/* Convert a Javascript Object to a comma separated string */

export const formatObjectToCSString = (obj = {}) =>
  Object.keys(obj).map(k => obj[k]).join(',')
