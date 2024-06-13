import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../../config/request";
import { message } from "antd";
export default class CategoryStore {
  categories = [];
  loading = false;
  open = false;
  formValues = {};
  constructor() {
    makeAutoObservable(this);
  }
  getList = async () => {
    this.loading = true;
    const res = await request("categories", "get");
    runInAction(() => {
      if (res) {
        this.categories = res.object;
      }
      this.loading = false;
      this.open = false;
      return res;
    });
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      nameKh: "",
      nameEn: "",
    };
  };

  handleClickEdit = (item) => {
    this.formValues = {
      id: item.id,
      nameKh: item.nameKh,
      nameEn: item.nameEn,
    };
    this.open = true;
    this.loading = false;
  };

  handleClickNew = () => {
    runInAction(() => {
      this.open = true;
      this.handleClearValue();
    });
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.handleClearValue();
      this.open = false;
    });
  };

  handleSubMid = async (values) => {
    this.loading = true;
    const { id, nameEn, nameKh } = values;
    const data = { id, nameEn, nameKh };
    const method = id == null ? "post" : "put";
    const url = id == null ? "categories" : "categories/" + id;
    const res = await request(url, method, data);
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    runInAction(() => {
      if (res) {
        message.success(messages);
        this.getList();
        this.handleCloseModal();
      }
      this.loading = false;
    });
  };
  handleDelete = async (item) => {
    this.loading = true;
    const res = await request(`categories/${item.id}`, "delete");
    runInAction(() => {
      if (res) {
        message.success("Delete  Sucessfull");
        this.getList();
      }
      this.loading = false;
    });
  };
}
