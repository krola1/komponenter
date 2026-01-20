export default function GrandChild({ value }) {
  console.log("grandchild", value);

  return (
    <div style={{ border: "solid white" }}>
      <h1>GrandChild</h1>
      <p>info : {value}</p>
    </div>
  );
}
