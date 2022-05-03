// Fichero src/services/api.js
const callToApi = async (search) => {
  const URL_API = `https://api.sampleapis.com`;

  // Llamamos a la API
  const response = await fetch(`${URL_API}/futurama/characters`);
  const data = await response.json();

  // Cuando responde la API podemos limpiar los datos aquí
  const result = data.map((characters) => {
    return {
      id: characters.id,
      name:
        characters.name.first +
        ' ' +
        characters.name.middle +
        ' ' +
        characters.name.last,
      image: characters.images.main,
      planet: characters.homePlanet,
      job: characters.occupation,
      species: characters.species,
      gender: characters.gender,
    };
  });

  return result;
};
export { callToApi };
