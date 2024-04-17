/** 
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ API_ID = "96e63510";
const /** {String} */ API_KEY = "8837c96b6f644ffbfbc2f129fe4364f6";
const /** {String} */ TYPE = "public";

/** 
* @param {Array} queries Query array  
* @param {Function} successCallback Success callback function
*/


export const fetchData = async function (queries, successCallback) {
    const /** {String} */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");
        
    const /** {String} */ url = `${ACCESS_POINT}?api_id=${API_ID}&api_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const /** {Object} */ response = await fetch(url);

    if(response.ok) {
        const data = await response.json();
        successCallback(data);
    }
};