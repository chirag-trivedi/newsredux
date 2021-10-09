const baseURL = "http://localhost:6700"

export function latestNews() {
    const output = fetch(`${baseURL}/articles`,
        { method: 'GET' }
    )
        .then((response) => response.json())

    return {
        type: 'GET_LATEST_NEWS',
        payload: output
    }
}

