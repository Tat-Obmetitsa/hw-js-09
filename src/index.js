import css from "./css/styles.css";
import menuTemplate from "/path/to/templates/templatesnpm.hbs";


const menuData = {
  title: "Eat it createElement, templates rule!",
  items: ["Handlebars", "LoDash", "Pug", "EJS", "lit-html"],
};

const markup = menuTempalte(menuData);