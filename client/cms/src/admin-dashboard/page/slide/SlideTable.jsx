import { Table, Image, Space, Button } from "antd";

// eslint-disable-next-line react/prop-types
const SlideTable = ({ slides, handleEdit, handleDelete, loading }) => {
  return (
    <>
      <Table
        rowKey="id"
        dataSource={slides}
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
            key: "name",
            title: "Name",
            dataIndex: "name",
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
            responsive: ["sm"],
          },
          {
            key: "imageUrl",
            title: "ImageUrl",
            dataIndex: "imageUrl",
            responsive: ["sm"],
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <Image
                      //  src={item.mediaUrl}
                      src={value}
                      width={40}
                      height={30}
                    />
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
                <Button
                  size="large"
                  onClick={() => handleEdit(item)}
                  type="primary"
                >
                  Edit
                </Button>
                <Button
                  size="large"
                  onClick={() => handleDelete(item)}
                  type="primary"
                  danger
                  loading={loading}
                >
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
      />
    </>
  );
};

export default SlideTable;
