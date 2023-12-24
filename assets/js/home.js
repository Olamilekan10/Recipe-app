/**
 * @license MIT
 * @copyright 2023 codewithAbella
 * @author codewithAbella <issaabubakry@gmail.com>
 */

"use strict";

/**
 * Home page search
 */

const /** {NodeElement} */ $searchField = document.querySelector("[data-search-field]");
const /** {NodeElement} */ $searchBtn = document.querySelector("[data-search-btn]");

$searchBtn.addEventListener("click", function () {
    if ($searchField.value) window.location = `/recipes.html?q=${$searchField.value}`;
});

/**
 * Search submit when pressing "Enter"
 */

$searchField.addEventListener("keydown", e => {
    if (e.key === "Enter") $searchBtn.click();
});


/**
 * Tab panel navigation
 */

const /** {NodeList} */ $tabBtns = document.querySelectorAll("[data-tab-btn]");
const /** {NodeList} */ $tabPanels = document.querySelectorAll("[data-tab-panel]");