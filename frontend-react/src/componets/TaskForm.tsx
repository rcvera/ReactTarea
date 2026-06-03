import { Form, Input, Select, Button } from "antd";

export default function TaskForm({ onAdd }: any) {
  const [form] = Form.useForm();

  const submit = (values: any) => {
    onAdd(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={submit}
    >
      <Form.Item
        name="title"
        rules={[{ required: true }]}
      >
        <Input placeholder="Nombre tarea" />
      </Form.Item>

      <Form.Item
        name="priority"
      >
        <Select
          options={[
            { value: "Alta" },
            { value: "Media" },
            { value: "Baja" }
          ]}
        />
      </Form.Item>

      <Button
        htmlType="submit"
        type="primary"
      >
        Agregar
      </Button>
    </Form>
  );
}