import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('--------------');
        console.log('--------------');
        console.log('UseResultPage');
        console.log('--------------');
        console.log('--------------');
        console.log(results);
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 30,
                    term: searchTerm,
                    location: 'Gothenburg'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('burgers');
    }, []);

    return [searchApi, results, errorMessage];
};