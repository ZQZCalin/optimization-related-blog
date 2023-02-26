import bibtex from "reviews/bibtex.txt";

fetch(bibtex)
  .then(response => response.json())
  .then(data => {
    // Use the data array here
    console.log(data);
  })
  .catch(error => console.error(error));