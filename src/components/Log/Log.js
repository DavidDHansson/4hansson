export default function log(data = {}) {
    fetch("http://4hansson.dk/api/log.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            ... { key: String(process.env.REACT_APP_API_KEY) }
        })
    });
}