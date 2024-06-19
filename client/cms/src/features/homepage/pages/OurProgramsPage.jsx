import GetArticles from "../components/Articles/GetArticles";
const OurProgramsPage = () => {
  return (
    <div>
      <div>
        <div className="pt-32 pb-40 bg-green-200 text-gray-700">
          <div>
            <GetArticles categoryName="Our Programs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgramsPage;
