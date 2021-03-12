export const shortenText = text => {
    if (text.length > 100) {
      let shortened = text.substr(0, 100).trim()
      shortened += '...'
      return shortened;
    } else {
      return text
    }
  };
  