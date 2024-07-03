import { Modal, Form, Input, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
const StudentModal = () => {
  const [formCat] = Form.useForm();

  const { t } = useTranslation("global");

  const { studentStore } = useStore();
  const { formValues, handleCloseModal, loading, open, handleFinish } =
    studentStore;

  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formCat, formValues]);
  return (
    <div>
      <Modal
        forceRender
        title={formValues.id == null ? "New Student" : "Update Student"}
        open={open}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="name"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please input Name!",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input placeholder="Description" />
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={handleCloseModal}>{t("button.cancel")}</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {formValues.id == null ? t("button.save") : t("button.update")}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default observer(StudentModal);
