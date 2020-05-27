export default function log(data = {}) {

    if(window.location.hostname === "localhost") { return }

    if(localStorage.getItem("id") === null) {
        fetch(`https://4hansson.dk/api/addUser.php?key=${String(process.env.REACT_APP_API_KEY)}`)
        .then(res => res.json())
        .then(res => {
            let logData = data
            logData.id = res.userId

            localLog(logData)

            localStorage.setItem("id", res.userId)
        })
    } else {
        let logData = data
        logData.id = localStorage.getItem("id");

        localLog(logData);
    }
}

function localLog(data) {

    if(window.location.hostname === "localhost") { return }

    fetch("https://4hansson.dk/api/log.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            ...{ key: String(process.env.REACT_APP_API_KEY) }
        })
    });
}
