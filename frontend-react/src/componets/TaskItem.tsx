import { Button, Space } from "antd";

export default function TaskItem({
  task,
  onComplete,
  onDelete
}: any) {
  return (
    <Space>
      <span
        style={{
          textDecoration:
            task.completed
              ? "line-through"
              : "none",
        }}
      >
        {task.title} - {task.priority}
      </span>

      <Button
        onClick={() =>
          onComplete(task.id)
        }
      >
        Completar
      </Button>

      <Button
        danger
        onClick={() =>
          onDelete(task.id)
        }
      >
        Eliminar
      </Button>
    </Space>
  );
}