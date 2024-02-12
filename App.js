const root = ReactDOM.createRoot(document.getElementById("root"));
const element = React.createElement("div", {}, [
  React.createElement("div", {}, React.createElement("h1", {}, "heading-1")),
  React.createElement("div", {}, React.createElement("h1", {}, "heading-2")),
]);
root.render(element);
