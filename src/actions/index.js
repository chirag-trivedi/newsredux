const baseURL = "http://localhost:8900"

export function latestNews() {
    const output = fetch(`${baseURL}/articles?_end=3`,
        { method: 'GET' }
    )
        .then((response) => response.json())

    return {
        type: 'GET_LATEST_NEWS',
        payload: output
    }
}

