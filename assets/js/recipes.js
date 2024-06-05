/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";


/**
 * Import 
 */

import { fetchData } from "./api.js";
import { $skeletonCard, cardQueries } from "./global.js";
import { getTime } from "./module.js";


/**
 * Accordion
 */

const /** {NodeList} */ $accordions = document.querySelectorAll("[data-accordion]");

/**
 * 
 * @param {NodeList} $element Accordion node
 */

const initAccordion = function ($element) {

    const /** {NodeList} */ $button = $element.querySelector("[data-accordion-btn]");
    let isExpanded = false; 

    $button.addEventListener("click", function () {
        isExpanded = isExpanded ? false : true;
        this.setAttribute("aria-expanded", isExpanded);
    });

} 

for (const $accordion of $accordions) initAccordion($accordion);