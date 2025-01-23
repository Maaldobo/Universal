const BASE_URL = 'https://api.thecatapi.com/v1/images/search'



interface ImagenResponse {
    url: string;
}

export async function getImagen(): Promise<ImagenResponse> {
    return await fetch(BASE_URL + '?type=medium')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data[0]; 
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            return { url: '' }; 
        });
}