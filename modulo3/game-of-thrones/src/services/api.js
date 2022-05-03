// Fichero src/services/api.js
const callToApi = async () => {
  const URL_API = 'https://thronesapi.com';
  try {
    // Llamamos a la API
    const response = await fetch(`${URL_API}/api/v2/Characters`);
    const data = await response.json();

    // Cuando responde la API podemos limpiar los datos aquí
    const result = data.map((item) => {
      return {
        name: item.firstName,
        id: item.id,
        lastname: item.lastName,
        fullName: item.fullName,
        title: item.title,
        family: item.family,
        image: item.imageUrl,
      };
    });

    return result;
  } catch (error) {
    console.log('Error');
  }
};
export { callToApi };
