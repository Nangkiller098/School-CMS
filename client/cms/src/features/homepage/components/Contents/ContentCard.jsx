import { Link } from "react-router-dom";

const ContentCard = ({ content }) => {
  const title = content?.title || "";
  const description = content?.description || "";
  const thumbnail = content?.thumbnail || "";

  const maxLengthTitle = 34;
  const maxLengthDesc = 60;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;
  return (
    <div className="border p-4 mb-4 font-khmermont h-[500px] ">
      <p className="text-start font-bold text-xl mb-2 p-2 h-[70px] break-words">
        <span dangerouslySetInnerHTML={{ __html: truncatedTitle }} />
      </p>
      <div className="h-[80px] font-khmermont break-words">
        <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
      </div>

      <div>
        <img
          className="h-[250px] w-[250px] mb-5"
          src={thumbnail}
          alt="No Image "
        />
      </div>
      <Link to={`/content/${content.id}`}>
        <button className="bg-green-400 rounded-lg w-32 h-10 mb-5 relative overflow-hidden group">
          <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          <span className="relative z-10 text-white">Read More</span>
        </button>
      </Link>
    </div>
  );
};

export default ContentCard;
