import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
// dashboard import-------------
import ImagePage from "../api/config";
import UserPage from "./admin-dashboard/page/UserPage";
import RolePage from "./admin-dashboard/page/role/RolePage";
import ArticlesPage from "./admin-dashboard/page/article/ArticlePage";
import ContentPage from "./admin-dashboard/page/ContentPage";
import HomePage from "./admin-dashboard/page/HomePage";
import NotFoundPage from "./admin-dashboard/page/NotFoundPage";
import MainLayout from "./admin-dashboard/components/layout/MainLayout";
import LoginPage from "./admin-dashboard/page/LoginPage";
import SlidePage from "./admin-dashboard/page/slide/SlidePage";
import StudentPage from "./admin-dashboard/page/StudentPage";
import StaffPage from "./admin-dashboard/page/StaffPage";
import CategoryPage from "./admin-dashboard/page/category/CategoryPage";
import RequireAuth from "./admin-dashboard/components/page/RequireAuth";

// homepage import --------------
import Home from "./homepage/pages/Home";
import About from "./homepage/pages/About";
import Contact from "./homepage/pages/Contact";
import OurPrograms from "./homepage/pages/OurProgramsPage";
import Layout from "./homepage/layout/Layout";
import CategoryList from "./homepage/components/Categories/CategoryList";
import ListByCategory from "./homepage/components/Categories/ListByCategory";
import ListByArticle from "./homepage/components/Articles/ListByArticle";
import Admission from "./homepage/pages/Admission";
import AllArtByCat from "./homepage/components/Categories/AllArtByCat";
import ArticleList from "./homepage/components/Articles/ArticleList";
import NewsPage from "./homepage/pages/NewsPage";
import ManagementTeamsPage from "./homepage/pages/ManagementTeamsPage";
import EventsPage from "./homepage/pages/EventsPages";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/teams/:id",
  //     element: <SingleMember />,
  // loader: async ({ params }) => {
  //   const data = await fetchData(params.id);
  //   return data;
  // },
  //   },
  // ]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* dashboard route */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/dashboard/category" element={<CategoryPage />} />
            <Route path="/dashboard/article" element={<ArticlesPage />} />
            <Route path="/dashboard/content" element={<ContentPage />} />
            <Route path="/dashboard/manage-banners" element={<SlidePage />} />
            <Route path="/dashboard/student" element={<StudentPage />} />

            <Route
              path="/dashboard/content/medias/:id"
              element={<ImagePage />}
            />

            {/* Protected Route  */}
            <Route element={<RequireAuth />}>
              <Route path="/dashboard/staff" element={<StaffPage />} />
              <Route path="/dashboard/users" element={<UserPage />} />
              {/* <Route path="/dashboard/roles" element={<RolePage />} /> */}
            </Route>

            {/* Protected Route  */}

            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/*   homepage route */}
          <Route element={<Layout />}>
            {/* pages*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourprograms" element={<OurPrograms />} />
            <Route path="/managementteams" element={<ManagementTeamsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/event/:id" element={<EventsPage />} />
            {/* <Route path="/events" element={<EventsPage />} /> */}
            <Route path="/admission" element={<Admission />} />
            {/* categories*/}
            <Route path="/category" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category/:id" element={<ListByCategory />} />
            <Route path="/category/:id/articles" component={<AllArtByCat />} />
            {/* articles*/}
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<ListByArticle />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Teams*/}
            <Route path="/teams/:id" element={<SingleMember />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default observer(App);
