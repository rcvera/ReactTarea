

interface Props {
  tasks: any[];
}

export default function Stats({
  tasks,
}: Props) {
  const total = tasks.length;

  const completed =
    tasks.filter(
      t => t.completed
    ).length;

  const pending =
    total - completed;

  return (
    <>
      <h2>Estadísticas</h2>

      <p>Total: {total}</p>

      <p>
        Completadas: {completed}
      </p>

      <p>
        Pendientes: {pending}
      </p>
    </>
  );
}
