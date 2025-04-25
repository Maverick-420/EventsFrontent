import { Link } from "react-router-dom";

const categories = [
  {
    title: "Prime",
    description: "Strategy and action sports for the squad",
    color: "bg-lime-200",
    icon: "✦",
    path: "/activities/prime",
    cta: "View All 8 Activities",
  },
  {
    title: "Studio",
    description: "Short format, big thrills served a la carte",
    color: "bg-neutral-100",
    icon: "✢",
    path: "/activities/studio",
    cta: "View All 8 Activities",
  },
  {
    title: "Union",
    description: "Classic favourites for the recreational sport",
    color: "bg-sky-200",
    icon: "✶",
    path: "/activities/union",
    cta: "View All 8 Activities",
  },
  {
    title: "Junior",
    description: "Toddler-sized fun for little champs",
    color: "bg-teal-100",
    icon: "✿",
    path: "/activities/junior",
    cta: "View All 8 Activities",
  },
  {
    title: "Pixel",
    description: "Shoot, race and more in the gamer’s den",
    color: "bg-emerald-100",
    icon: "🕹",
    path: "/activities/pixel",
    cta: "View All 8 Activities",
  },
];

const CategoryCard = ({ title, description, color, icon, path, cta }) => (
  <Link
    to={path}
    className={`group relative p-4 w-full sm:w-1/5 transition-all duration-300 ${color} hover:bg-neutral-100`}
  >
    <div className="text-black group-hover:hidden">
      <div className="text-2xl font-bold mb-1">
        {icon} {title}
      </div>
      <p className="text-sm">{description}</p>
    </div>

    {cta && (
      <div className=" scale-125absolute inset-0 flex flex-col justify-center p-4 z-10 hidden group-hover:flex bg-white shadow-xl">
        <h3 className="text-2xl font-bold mb-1 text-black">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <div className="mt-3 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
          {cta} →
        </div>
      </div>
    )}
  </Link>
);

const ActivityCategories = () => {
  return (
    <section className="flex flex-wrap sm:flex-nowrap w-full">
      {categories.map((cat) => (
        <CategoryCard key={cat.title} {...cat} />
      ))}
    </section>
  );
};

export default ActivityCategories;
