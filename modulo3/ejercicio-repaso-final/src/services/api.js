// Fichero src/services/api.js
const callToApi = async (search) => {
  const URL_API = `https://randomuser.me/api/?results=10`;

  // Llamamos a la API
  const response = await fetch(URL_API);
  const data = await response.json();

  // Cuando responde la API podemos limpiar los datos aquí
  const result = data.results.map((data) => {
    return {
      name: data.name.first,
      lastname: data.name.last,
      photo: data.picture,
      city: data.location.city,
      age: data.dob.age,
      gender: data.gender,
      id: data.id.value,
    };
  });
  return result;
};
export { callToApi };
