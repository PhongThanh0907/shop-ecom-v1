import Link from "next/link";
import React from "react";

interface BreadcrumbsProp {
  list: {
    title: string;
    link: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProp> = ({ list }) => {
  return (
    <div className="flex items-center gap-2">
      {list.map((e, index) => (
        <React.Fragment key={index}>
          {index < list.length - 1 ? (
            <React.Fragment>
              <Link
                className="text-gray-500 hover:text-blue-500 duration-300"
                href={e.link}
              >
                {e.title}
              </Link>
              <span className="text-gray-500">/</span>
            </React.Fragment>
          ) : (
            <span key={e.title}>{e.title}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
