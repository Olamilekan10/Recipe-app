/**
 * @license MIT
 * @copyright 2023 Abella
 * @author Abella <issaabubakry@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {Nodelist} $elements NodeList
 * @param {String} $eventType Event type string
 * @param {function} callback callback function
 */

window.addEventOnElements = ($elements, eventType, callback) => {
    for (const $element of $elements) {
        $element.addEventListener(eventType, callback);
    }
}