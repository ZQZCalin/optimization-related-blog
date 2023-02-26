function publicURL(path) {
    return process.env.PUBLIC_URL + path;
}


function dateParser(date) {
    // parse Date object into "yyyy-mm-dd"
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = "" + date.getFullYear();
  
    if (month.length < 2)
      month = "0" + month;
    if (day.length < 2)
      day = "0" + day;
  
    return [year, month, day].join("-");
  }


/**
 * @typedef {Object} BibTeX
 * @property {string} key - The name of the object.
 * @property {Object} fields - The value of the object.
 */

/**
 * This function parses a string of bibtex and returns an array of parsed objects.
 * @param {string} bibtex - The entire string of bibtex.
 *                           Every bibtex is separated by a new line.
 * @returns {BibTeX[]} An array of parsed BibTex Object. 
 */
function parseBibtex(bibtex) {
  // Split the BibTeX data into individual entries
  const entries = bibtex.split(/(\r?\n){2,}/);
  // console.log(entries);

  // Initialize an array to hold the parsed entries
  const parsedEntries = [];

  // Loop through each entry and parse its contents
  for (const entry of entries) {
    // pass empty entries
    if (entry.trim() == '') {
      continue;
    }

    // Split the entry into its key and value parts
    const split = entry.trim().split(/\r?\n/);
    const [, key] = /@\w+\{(\w+),/.exec(split);

    // testing
    // console.log(split)

    // Initialize an object to hold the parsed fields
    const fields = {};

    // Loop through each field and parse its key-value pair
    for (let i = 1; i < split.length - 1; i++) {
      const assignment = split[i];
      // Split the assignment into its key and value parts
      const [field, content] = assignment.split('=');

      // Remove any surrounding whitespace and curly braces from the content
      const cleanedContent = content.trim().replace(/^{|}$|},$/g, '').trim();

      // Store the parsed key-value pair in the fields object
      fields[field.trim()] = cleanedContent;
    }

    // Store the parsed entry in the parsedEntries array
    parsedEntries.push({ key: key.trim(), fields });
  }

  // Return the array of parsed entries
  return parsedEntries;
}


/**
 * Parses author names from BibTeX format into APA style.
 * @param {string} author - The author name in BibTeX format.
 * @returns {string} The author name in APA style format.
 */
function parseAuthor(author) {
  // Match the "lastname, firstname" format
  let match = author.match(/^([^,]+),\s*([^,]+)$/);
  if (match) {
    return `${match[2]} ${match[1]}`;
  }

  // Match the "firstname lastname" format
  match = author.match(/^(\S+)\s+(\S+)$/);
  if (match) {
    return `${match[2]}, ${match[1]}`;
  }

  // Match the "lastname, firstname middlename" format
  match = author.match(/^([^,]+),\s*([^,]+)\s+(\S+)$/);
  if (match) {
    return `${match[2]} ${match[3][0]}. ${match[1]}`;
  }

  // Match the "firstname middlename lastname" format
  match = author.match(/^(\S+)\s+(\S+)\s+(\S+)$/);
  if (match) {
    return `${match[3]}, ${match[1][0]}. ${match[2][0]}.`;
  }

  // If the name doesn't match any of the above formats, return it as is
  return author;
}


/**
 * Parses a string of authors in BibTeX format into APA style.
 * @param {string} authors - The string of authors in BibTeX format.
 * @returns {string} The string of authors in APA style format.
 */
function parseAuthors(authors) {
  // Split the authors string into an array of individual author names
  const authorList = authors.split(' and ');

  // Parse each author name using the parseAuthor function
  const parsedAuthors = authorList.map(parseAuthor);

  // Join the parsed author names into a string using commas and an "and" before the last name
  if (parsedAuthors.length > 1) {
    const lastAuthor = parsedAuthors.pop();
    return `${parsedAuthors.join(', ')} and ${lastAuthor}`;
  } else {
    return parsedAuthors[0];
  }
}

export { publicURL, dateParser, parseBibtex, parseAuthors };