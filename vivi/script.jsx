
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Hello, {this.props.name}!</h2>
                <p>This is my first React App.</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App name="Dennis"/>,
    document.getElementById("root")
);