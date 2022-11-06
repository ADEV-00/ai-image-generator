import React from "react";
import Image from "next/image";

interface RecentImageProps {
  image: Image;
  handleSelect: (image: Image) => void;
}
interface Image {
  url: string;
  desc: string;
}

const RecentImage: React.FC<RecentImageProps> = ({ image, handleSelect }) => {
  return (
    <button
      onClick={() => handleSelect(image)}
      className="w-40 h-40 rounded-md overflow-hidden shadow-lg relative"
    >
      <div className="w-full h-full absolute top-0 transition-all ease-linear bg-[#111526]/40 backdrop-blur-sm z-50 flex justify-center items-center opacity-0 hover:opacity-100">
        <div className="px-3 py-2 border font-bold text-white border-white rounded-full">
          Select
        </div>
      </div>
      <Image src={image.url} alt="Recent art" fill />
    </button>
  );
};

export default RecentImage;
