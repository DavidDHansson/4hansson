import React from "react";

import Reveal from "react-reveal";
import log from "components/Log/Log";

export default class ContactGitProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoaded: false,
            error: null
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/daviddhansson")
            .then(res => res.json())
            .then(json => this.setState({ data: json, isLoaded: true }))
            .catch(error => this.setState({ isLoaded: true, error: error }));
    }

    render() {
        const { error, isLoaded, data } = this.state;

        return error || data.message
            ? <div style={{ width: "50%"}}><p>Woops, an error occurred. <br /> There were probably too many requests to the Github API</p></div>
            : !isLoaded
                ? <div>Loading...</div>
                : <Reveal onReveal={() => log({ site: "Contact", section: "2" })}>
                    <div className="contactGitProfileWrapper">
                        <div>
                            <div><img src={data.avatar_url} className="contactGitProfileImg" alt="Github Avatar" /></div>

                            <div style={{ height: "1ch" }}><p style={{ fontWeight: 700, fontSize: "30px" }}>{data.name}</p></div>
                            <div style={{
                                height: "1ch",
                                paddingBottom: "2ch",
                                borderBottom: "1px solid rgb(150, 150, 150)",
                                width: "50%"
                            }}><p style={{ color: "rgb(90, 90, 90)", fontSize: "26px" }}>{data.login}</p></div>

                            <div style={{ height: "1ch", paddingBottom: "1ch" }}><p>{data.bio}</p></div>

                            <div style={{ height: "1ch" }}><p style={{ fontWeight: 700 }}>{data.company}</p></div>
                            <div style={{ height: "1ch", paddingBottom: "3ch" }}><p>{data.location}</p></div>


                            <div style={{ height: "1ch" }} className="contactGitProfileLink">
                                <a target="_blank" rel="noopener noreferrer" href={`https://github.com/${data.login}`}>https://github.com/{data.login}</a>
                            </div>
                        </div>
                    </div>
                </Reveal>
    }
}