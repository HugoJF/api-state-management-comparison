import axios from "axios";

const endpoint = 'https://meowfacts.herokuapp.com/';

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export async function fetchFact() {
    await sleep();
    const request = await axios.get<MeowFactsApiResponse>(endpoint);
    const data = request.data['data'];

    if (!Array.isArray(data)) {
        throw new Error('Invalid response from API');
    }

    return data[0];
}
