import React from "react";

export default function Container({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div className={`flex flex-col w-full h-full bg-gray-300  ${classNames}`}>
      {children}
    </div>
  );
}
