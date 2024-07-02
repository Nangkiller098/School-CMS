import { Table, Space, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
const ImageTable = () => {
  const { mediaStore } = useStore();
  const { medias, handleClickDelete, loading } = mediaStore;
  const { t } = useTranslation("global");
  return (
    <div>
      <Table
        rowKey="id"
        dataSource={medias}
        style={{
          height: "80vh",
          overflow: "auto",
          padding: 0,
        }}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
            responsive: ["sm"],
          },

          {
            key: "url",
            title: "Image",
            dataIndex: "url",

            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <LazyLoadImage src={value} width={40} height={30} />
                  </>
                );
              } else {
                return (
                  <div
                    style={{ height: 30, width: 40, backgroundColor: "#888" }}
                  ></div>
                );
              }
            },
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            render: (value, item) => (
              <Space>
                {/* <Button
                  onClick={() => handleClickEdit(item, contentId)}
                  type="primary"
                >
                  Edit
                </Button> */}
                <Button
                  onClick={() => handleClickDelete(item)}
                  type="primary"
                  danger
                  loading={loading}
                >
                  {t("button.delete")}
                </Button>
              </Space>
            ),
          },
        ]}
      />
    </div>
  );
};

export default observer(ImageTable);
