import { Link } from "react-router";

function PagesLayout({ title }) {
  return (
    <div className="relative z-1 bg-[url('/page-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-row gap-2 text-black/50 text-sm font-semibold pt-25 pb-10">
          <li>
            <Link to="/">
              <i className="bi bi-house me-1"></i>
              <span className="border-b border-dashed">Home</span>
            </Link>
          </li>
          <li>/</li>
          <li>{title}</li>
        </ul>
        <div className="layout-heading pb-10">
          <h1 className="text-4xl font-semibold text-black/85">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default PagesLayout;
