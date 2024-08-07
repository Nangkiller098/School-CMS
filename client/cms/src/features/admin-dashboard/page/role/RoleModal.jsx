import { Modal, Form, Input, Space, Button } from "antd";
import { useEffect } from "react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const RoleModal = () => {
  const [formCat] = Form.useForm();
  const { roleStore } = useStore();
  const { formValues, handleCloseModal, handleFinish, loading, open } =
    roleStore;
  const { t } = useTranslation("global");
  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formCat, formValues]);

  return (
    <div>
      <Modal
        forceRender
        title={
          formCat.getFieldValue("id") == null ? "New Roles" : "Update Roles"
        }
        open={open}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="Name"
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

          <Form.Item style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={handleCloseModal}>{t("button.cancel")}</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {formCat.getFieldValue("id") == null
                  ? t("button.save")
                  : t("button.update")}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default observer(RoleModal);
