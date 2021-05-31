function stringToCapitalize(text: string) {
  return text[0].toUpperCase() + text.toLowerCase().slice(1);
}

const t = stringToCapitalize('test');

export default stringToCapitalize;
