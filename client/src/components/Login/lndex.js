const { Component } = require("react");


class Login extends Component {
    state = {
        emailAddress: "",
        password: "",
    };

    handleInputChange = (event) => {
        const {name, value} = event.target:
        this.setState({[name]: value,
        });
    };

    handlesubmit = (event) => {

        event.preventDefault();

        this.props.history.push("/Documents");
    };

};

render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3"/>
        </div>
    )
}
