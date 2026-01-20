export default function GrandChild(props) {
  console.log("grandchild", props);

  return (
    <div className="box">
      <h1>GrandChild</h1>
      <p>info : {props.value}</p>
    </div>
  );
}
