const BASE_URL = 'https://catfact.ninja/fact'


interface TextResponse {
    fact: string;
}

export async function getText(): Promise<TextResponse> {
    return await fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            return { fact: '' }; 
        });
}