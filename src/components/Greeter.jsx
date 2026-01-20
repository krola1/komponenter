export default function Greeter({ name, age, adress, test }) {
  return (
    <div style={{ border: "solid white" }}>
      <h3>Hei {name}</h3>
      <p>Du er: {age} år gammel</p>
      <p>Du bor i gate: {adress.street}</p>
      <p>{test}</p>
    </div>
  );
}
