import Image from "next/image";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

const Trending = ({ result }: any) => {
  return (
    <div className="hover:bg-white px-4 py-3 cursor-pointer hover:bg-opacity-[0.03] transition duration-200 ease-out flex items-center justify-between w-full text-white font-light">
      <div className="space-y-0.5">
        <p className="text-[#6e767d] text-xs font-medium">{result.heading}</p>
        <h6 className="font-bold max-w-[250px] text-sm">
          {result.description}
        </h6>
        <p className="text-[#6e767d] text-xs font-medium">
          Trending with{" "}
          {result.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </p>
      </div>
      <div className="icon group flex-shrink-0">
        <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
      </div>
      {/* {result.img ? (
        <img
          src={result.img}
          width={70}
          height={70}
          className="rounded-2xl object-cover"
        />
      ) : (
        <div className="icon group">
          <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
      )} */}
    </div>
  );
};

export default Trending;
