import React from "react";

import YearlyGit from "./YearlyGit";
import ContactGitInfo from "./ContactGitInfo";

import "./ContactGit.css";

export default class ContactGit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://github-contributions-api.now.sh/v1/daviddhansson")
            .then(res => res.json())
            .then(json => {
                let arr = json.contributions

                const d = new Date();
                let dato = `${d.getFullYear()}-${d.getMonth() + 1 <= 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}-${d.getDate() <= 10 ? `0${d.getDate()}` : d.getDate()}`

                let now = 0;
                for(let i = 0; i < arr.length; i++) {
                    if (arr[i].date == dato) {
                        now = i
                    }
                }

                arr = arr.slice(now, arr.length - 1).reverse();

                this.setState({data: arr});
            })

        
    }


    render() {
        return (
            <div className="contactGitWrapper">
                <YearlyGit data={this.state.data}/>
                <ContactGitInfo />
            </div>
        );
    }
}