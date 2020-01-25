import React from "react";

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
            ? <div>Woops, an error occurred</div>
            : !isLoaded
                ? <div>Loading...</div>
                : <div className="contactGitProfileWrapper">

                    <div><img src={data.avatar_url} className="contactGitProfileImg" /></div>

                    <div style={{ height: "3ch" }}><p style={{ fontWeight: 700, fontSize: "26px" }}>{data.name}</p></div>
                    <div style={{ height: "3ch", paddingBottom: "4ch" }}><p style={{ color: "rgb(200)", fontSize: "22px" }}>{data.login}</p></div>

                    <div style={{ height: "2ch", paddingBottom: "3ch" }}><p>{data.bio}</p></div>

                    <div style={{ height: "2ch" }}><p style={{ fontWeight: 700 }}>{data.company}</p></div>
                    <div style={{ height: "2ch", paddingBottom: "3ch" }}><p>{data.location}</p></div>


                    <div style={{ height: "2ch" }}><a href={data.url}>(Github Profile)</a></div>
                </div>
    }
}