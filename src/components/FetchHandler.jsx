async function fetchComposer(composer) {
  const url = composer.length === 1 ? "name" : "search";
  let returnValue;
  try {
    const res = await fetch(
      `https://api.openopus.org/composer/list/${url}/${composer}.json`
    );
    const json = await res.json();
    const composers = json.composers;

    returnValue = composers.map(f => f.name) || [];
  } catch (e) {
    returnValue = [];
  }
  return returnValue;
}

export default fetchComposer;
