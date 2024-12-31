import { Link } from "react-router-dom";

function HeroCard({blog}) {
  const {imageURL, category, title, userName, createdAt} = blog;
  return (
    <Link>
      <div
        className="relative h-full w-full bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <div className="bg-black bg-opacity-70 min-h-screen flex flex-col justify-center items-center text-center p-6">
          <div className="max-w-md">
            <span className="bg-red-600 text-white text-xs uppercase font-bold py-1 px-3 rounded">
              {category}
            </span>
            <h1 className="text-5xl font-bold mt-2">
              {title}
            </h1>
            <div className="text-sm mt-3">
              <span>
                By <strong>{userName}</strong>
              </span>{" "}
              | <span>{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HeroCard;
