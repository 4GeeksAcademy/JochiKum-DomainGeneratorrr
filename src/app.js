/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let listaDominio = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k]);
        listaDominio += `<li class="list-group-item">${pronoun[i]}${adj[j]}${noun[k]}.com</li>`;
      }
    }
  }

  let forHTML = document.querySelector("#dom");
  forHTML.innerHTML = listaDominio;
};
