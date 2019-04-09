class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Hi this is showing now!</p>}
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById("app"));

// console.log("build it visible app is running!");
// const appRoot = document.getElementById("app");

// let visibility = false;

// const toggleDetails = () => {
//   visibility = !visibility;
//   renderBuildItApp();
// };

// const renderBuildItApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && <p>Hi this is showing now!</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderBuildItApp();
