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

export { publicURL, dateParser };