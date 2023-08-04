import React from "react";

export default function ImageContainer({
  src,
  classNames,
}: {
  src: string;
  classNames?: string;
}) {
  return (
    <div className={`flex ${classNames}`}>
      <img src={src} className="w-full h-[600px]" />
    </div>
  );
}
