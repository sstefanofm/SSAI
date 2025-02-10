/* get value of specific query url parameter
 *  from:
 *    getUrlQueryParamValue(
 *      "myUrl.com?thisQuery=thisValue&abc=1",
 *      "thisQuery"
 *    )
 *  return: "thisValue" */

export const getUrlQueryParamValue = (url = '', queryParam = '') => {
  const sliced = url.slice(
    url.indexOf(queryParam) + queryParam.length + 1 /* = */
  )

  return sliced.slice(
    0,
    sliced.indexOf('&') === -1 ? undefined : sliced.indexOf('&')
  )
}
