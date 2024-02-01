import "../css/style.css";

import React from "react";
import { h, render, Component } from "preact";

class Header extends Component {
    state = {time: Date.now()};
    timer: NodeJS.Timeout = null;

    componentDidMount(): void {
        this.timer = setInterval(() => {
            this.setState({time: Date.now()});
        }, 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.timer);
    }

    render() {
        const time: string = new Date(this.state.time).toLocaleTimeString();

        return (
            <header>
                <h1>Ian's Preact Skeleton</h1>
                <h2>Feel free to begin editing <span>index.tsx</span>.</h2>
                <p>The current time is <span>{time}</span>.</p>
            </header>
        )
    }
}

render(<Header />, document.getElementById("header"));