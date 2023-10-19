/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let tlds = [".com", ".net"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${pronoun}${adj}${noun}${tld}`);
        }
      }
    }
  }

  document.body.innerHTML = `<ul> ${domainNames.map(
    domainName => `<li>${domainName}</li>`
  )}</ul>`;
};
