class ReactComponentClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.state = { count: 0 };
        this.state = { text: "" };
    }

    componentDidMount() {
        this.setState(
            { count: 0 }
        );
    }

    updateCount = () => {
        this.setState(
            { count: this.state.count + 1 }
        );
    }

    handleInput = (e) => {
        const val = e.target.value;
        this.setState(
            { text: val }
        );
    }

    render() {
        return (
            <div>
                <h1>React Basics</h1>

                <h4>Hello, {this.props.name}</h4>
                <p>Welcome to your first React Class Component!</p>
                <br />
                <br />
                <br />
                <h1>React Intermediate</h1>

                <button onClick={this.updateCount}>Click me</button>
                <p>I've been clicked {this.state.count} times!</p>

                <input
                    type="text"
                    placeholder="Type Here"
                    val={this.state.text}
                    onChange={this.handleInput}
                />
                <p><strong>Your entry is: </strong>{this.state.text}</p>
            </div>
        );
    }
}

// const App = (props) => {
//     const name = props.name;
//     return (
//         <div>
//             <h1>Hello, {name}</h1>
//             <p>Welcome to the first React component!</p>
//         </div>
//     )
// }

// const CustomButton = (props) => {
//     return (
//         <button>
//             {props.value}
//         </button>
//     )
// }

ReactDOM.render(
    <ReactComponentClass name="Vita" />,
    document.getElementById("root")

    //     // <App name="Vita" />,
    //     // document.getElementById("root")

    //     // <CustomButton value="Click me" />,
    //     // document.getElementById("button")

);
