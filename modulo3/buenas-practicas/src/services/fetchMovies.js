const getMovies = () => {
    return fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adamdb-v1/books_with_id.json")
        .then(response => response.json())
        .then(data => {
            const cleanData = data.map(item => {
                return {
                    id: item.id,
                    name: item.title,
                    synopsis: item.synopsis,
                    year: item.year
                }
            })
            console.log(cleanData);
            return cleanData;
        });
}


export default getMovies;