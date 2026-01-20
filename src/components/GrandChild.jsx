export default function GrandChild(props) {
  console.log("grandchild", props);

  return (
    <div style={{ border: "solid white" }}>
      <h1>GrandChild</h1>
      <p>info : {props.value}</p>
    </div>
  );
}
