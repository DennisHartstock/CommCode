class ReactComponentClass extends React.Component {

constructor(props) {
    super(props);
}

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <p>Welcome to your first React Class Component!</p>
            </div>
        );
    }
}

const App = (props) => {
    const name = props.name;
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Welcome to the first React component!</p>
        </div>
    )
}

const CustomButton = (props) => {
    return (
        <button>
            {props.value}
        </button>
    )
}

ReactDOM.render(
    <ReactComponentClass name="Vita"/>,
    document.getElementById("root")

    // <App name="Vita" />,
    // document.getElementById("root")

    // <CustomButton value = "Click me" />,
    // document.getElementById("button")


);
