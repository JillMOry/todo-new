import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
			todos: [],
			text: ""
		};
	}

	handleClick = () => {
		this.setState({
			isClicked: true,
			todos: [...this.state.todos, this.state.text],
			text: ""
		});
	};

	handleDelete = (index) => () => {
		const todosCopy = [...this.state.todos];
		todosCopy.splice(index, 1);
		this.setState({
			todos: todosCopy
		});
	};

	onChange = (e) => {
		this.setState({
			text: e.target.value
		});
	};

	render() {
		return (
			<header className="App-header">
				<div className="App">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						<code>Welcome To The Sweet Life</code>
					</p>

					<button onClick={this.handleClick}>
						{this.state.isClicked ? "TRUE!!" : "FALSE!!!"}
					</button>

					<input value={this.state.text} onChange={this.onChange} />

					{this.state.todos.map((todo, index) => (
						<div key={index}>
							<button onClick={this.handleDelete(index)}>delete</button>
							{todo}
						</div>
					))}
				</div>
			</header>
		);
	}
}

export default App;
