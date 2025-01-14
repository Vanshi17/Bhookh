import axios from 'axios';

const fetchData = async () => {
    const baseUrl = 'https://dummyjson.com/recipes';
    try {
        const response = await axios.get(baseUrl);
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; 
    }
};

export { fetchData };
