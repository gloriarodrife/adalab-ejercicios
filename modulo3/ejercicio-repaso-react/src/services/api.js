// Fichero src/services/api.js

const callToApi = async () => {
  const URL_API = `https://api.github.com/orgs/Adalab/repos`;

  try {
    // Llamamos a la API
    const response = await fetch(URL_API);
    const data = await response.json();

    // Cuando responde la API podemos limpiar los datos aquí
    const result = data.map((item) => ({
      full_name: item.full_name,
      id: item.id,
      image: item.owner.avatar_url,
    }));

    return result;
  } catch (error) {
    console.log('Error');
  }
};

export { callToApi };
