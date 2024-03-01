import React from "react";

export default function Card({ image, tags, title, about }) {
  console.log(tags);
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 cursor-pointer hover:scale-105 flex flex-col justify-between">
      <img className="w-full" src={image} alt="Food" />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 py-4 w-[250px]">
        {tags.map((tag) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
            key={tag}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
