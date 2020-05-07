class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = props.handleChange;
  }

  render() {
    return (
      React.createElement("div", { id: "editorDiv" },
      React.createElement("div", { id: "editorHeader", className: "header" }, "Editor"),
      React.createElement("textarea", { id: "editor", value: this.props.editorValue, onChange: this.handleChange })));



  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      React.createElement("div", { id: "previewDiv", className: "mainDivs" },
      React.createElement("div", { className: "header" }, "Preview"),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.props.editorValue, { breaks: true }) } })));



  }}


class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: `# Header 
## Sub-header
[I'm an inline-style link to Google](https://www.google.com) 

Inline \`code\` has \`back-ticks around\` it.

\`\`\`
s = "Some Python code"
print(s)
\`\`\`
Here's a list:
* Item 1
* Item 2

> This is a blockquote

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwcnmYsNR1l7UTbtwku9L4JxSUbLNdM6StLQ3s66bY4zK0h7yY&usqp=CAU "Dog")

Finally, some **bolded text**.` };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      editorValue: event.target.value });

  }

  render() {
    return (
      React.createElement("div", { id: "mainDiv" },
      React.createElement(Editor, { editorValue: this.state.editorValue, handleChange: this.handleChange }),
      React.createElement(Preview, { editorValue: this.state.editorValue })));


  }}


ReactDOM.render(React.createElement(RootComponent, null), document.getElementById('root'));