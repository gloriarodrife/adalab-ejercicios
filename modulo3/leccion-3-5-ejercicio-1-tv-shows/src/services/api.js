const callToApi = async (search) => {
  const URL_API = `https://api.tvmaze.com`;

  // Llamamos a la API
  const response = await fetch(`${URL_API}/search/shows?q=${search}`);
  const data = await response.json();

  // Cuando responde la API podemos limpiar los datos aquí
  const result = data.map((item) => {
    const show = item.show;

    return {
      name: show.name,
      id: show.id,
    };
  });

  return result;
};

export { callToApi };
