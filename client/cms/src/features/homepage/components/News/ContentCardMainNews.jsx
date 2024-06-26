import React from "react";
import { Link } from "react-router-dom";

const ContentCardMainNews = ({ content, isMain }) => {
  const { imageUrl, title, description } = content;
  const maxLengthTitle = 35;
  const maxLengthDesc = 100;
  const errorImage = "Error Image";

  const truncatedDescription =
    description.length > maxLengthDesc
      ? `${description.substring(0, maxLengthDesc)}...`
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? `${title.substring(0, maxLengthTitle)}...`
      : title;

  return (
    <div className={`flex ${isMain ? "flex-col" : "mb-4"} border rounded-lg`}>
      <div className={`${isMain ? "w-full" : "w-1/3"}`}>
        <img
          src={imageUrl}
          alt={errorImage}
          className="w-full h-auto md:w-[516px] md:h-[516px] object-cover rounded-t-md bg-green-100"
        />
      </div>
      <div
        className={`${
          isMain ? "" : "w-2/3 pl-4"
        } tracking-wider pt-4 px-4 break-words bg-green-100`}
      >
        <h3
          className="text-xl font-semibold mb-2 h-6"
          dangerouslySetInnerHTML={{ __html: truncatedTitle }}
        />
        <p
          className="text-sm text-gray-700 h-16"
          dangerouslySetInnerHTML={{ __html: truncatedDescription }}
        />
        <div className="relative h-10">
          <Link
            to={`/content/${content.id}`}
            className="absolute right-0 bottom-0 mr-5 mb-3 text-green-600 drop-shadow-lg underline"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCardMainNews;
