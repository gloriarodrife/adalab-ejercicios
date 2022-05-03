// Fichero src/services/api.js
const callToApi = async () => {
  const URL_API = `https://randomuser.me/api/?results=50`;

  // Llamamos a la API
  const response = await fetch(URL_API);

  // Recojo los datos y los convierto en tipo json
  const data = await response.json();

  // Cuando responde la API podemos limpiar los datos aquí
  const result = data.results.map((data) => {
    return {
      fullName: ` ${data.name.first} ${data.name.last}`,
      id: data.login.uuid,
      photo: data.picture,
      city: data.location.city,
      age: data.dob.age,
      email: data.email,
      country: data.location.country,
    };
  });

  // Retorno el objeto limpio
  return result;
};
export { callToApi };
