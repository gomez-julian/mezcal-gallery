import axios from "axios";

const AstraAPI = axios.create({
    baseURL: `https://a16b65fe-1cb5-481b-9917-6954f9a991a6-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/mezcal`,
    headers: {
        "X-Cassandra-Token": `AstraCS:eoieafCuPGsGIZTMFEqpwbqk:d5569624615e5b685bd2656af1bd2572c713798295d1c8a08988fdae3ea1480e`,
    },
});

export default AstraAPI;