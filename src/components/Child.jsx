import GrandChild from "./GrandChild";

export default function Child(props) {
  console.log("child", props);

  return (
    <div style={{ border: "solid white" }}>
      <h1>Child</h1>
      <GrandChild props={props} />
    </div>
  );
}
