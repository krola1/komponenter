import GrandChild from "./GrandChild";

export default function Child({ value }) {
  return (
    <div style={{ border: "solid white" }}>
      <h1>Child</h1>
      <GrandChild value={value} />
    </div>
  );
}
