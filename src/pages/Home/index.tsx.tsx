import { useHomeStore } from "./store";

export default function Home() {
  const { counter, title, setValue } = useHomeStore();

  return (
    <div>
      <h1>{title}</h1>
      <p>Contador: {counter}</p>
      <button onClick={() => setValue("counter", counter + 1)}>
        Incrementar
      </button>
      <input
        type="text"
        value={title}
        onChange={(e) => setValue("title", e.target.value)}
        placeholder="Digite um novo título"
      />
    </div>
  );
}
