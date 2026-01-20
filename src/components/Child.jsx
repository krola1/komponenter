import GrandChild from "./GrandChild";

export default function Child(props) {
  return (
    <div className="box">
      <h1>Child</h1>
      <GrandChild {...props} />
    </div>
  );
}
