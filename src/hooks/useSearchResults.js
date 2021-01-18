import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term: searchTerm,
                    location: 'Pasig City',
                }
            });
            setResults(response.data.businesses);                
        } catch (error) {
            setErrorMessage('Something went wrong.');
        }
    };

    useEffect(() => {
        searchApi('beef');
    }, []);

    return [searchApi, results, errorMessage];
}