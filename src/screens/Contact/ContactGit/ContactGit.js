import React, { useState, useEffect } from "react";

export default function ContactGit() {
    const [gitEvents, setGitEvents] = useState({ data: []});

    useEffect(() => {
        // fetch("https://api.github.com/users/daviddhansson/events")
        //     .then(res => res.json())
        //     .then(setGitEvents);
        //fuck det bare brug class components ://
    }, []);


    return (
        <div style={{ paddingTop: "250px", paddingBottom: "200px", backgroundColor: "rgb(230, 232, 236)" }}>
            {/* <p>{gitEvents[0].actor.display_login}</p> */}
        </div>
    )
}