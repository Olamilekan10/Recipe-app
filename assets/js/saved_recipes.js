/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";


/**
 * Import
 */

import { getTime } from "./module.js";


const /** {Array} */ savedRecipes = Object.keys(window.localStorage).filter(item => {
    return item.startsWith("cookio-recipe");
});

const /** {NodeElement} */ $savedRecipeContainer = document.querySelector("[data-saved-recipe-container]");

$savedRecipeContainer.innerHTML = `<h2 class="headline-small section-title">All Saved Recipes</h2>`;
const /** {NodeElement} */ $gridList = document.createElement("div");
$gridList.classList.add("grid-list");

if (savedRecipes.length) {
    savedRecipes.map((savedRecipe, index) => {

        const {
            recipe : {
                image,
                label: title,
                totalTime: cookingTime,
                uri
            }
        } = JSON.parse(window.localStorage.getItem(savedRecipe));

        console.log(JSON.parse(window.localStorage.getItem(savedRecipe)));

    });
}