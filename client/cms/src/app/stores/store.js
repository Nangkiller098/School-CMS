import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import SlideStore from "./slideStore";
import ArticleStore from "./articleStore";
import UserStore from "./userStore";
import RoleStore from "./roleStore";
import ManagementTeamStore from "./managementTeamStore";
import StudentStore from "./studentStore";
import ContentStore from "./contentStore";
import MediaStore from "./mediaStore";
import CardStore from "./cardStore";

export const store = {
  categoryStore: new CategoryStore(),
  slideStore: new SlideStore(),
  articleStore: new ArticleStore(),
  userStore: new UserStore(),
  roleStore: new RoleStore(),
  managementTeamStore: new ManagementTeamStore(),
  studentStore: new StudentStore(),
  contentStore: new ContentStore(),
  mediaStore: new MediaStore(),
  cardStore: new CardStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
