import { RiLeafLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { RiRestaurantLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="mx-auto my-12 max-w-7xl px-4 text-[#78350f]">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-4xl font-bold">Welcome to Bella Bella</h2>
        <p className="max-w-2xl text-xl text-gray-600">
          Since 1952, our family has been serving authentic Italian cuisine with
          recipes passed down through generations. Every dish is prepared with
          love, using only the finest ingredients imported directly from Italy.
        </p>
      </div>

      {/* what we do */}
      <div className="my-12 flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="flex h-15 w-15 items-center justify-center rounded-full bg-[#FEF3C7] p-2">
            <RiRestaurantLine className="text-2xl text-[#d97706]" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Authentic Recipes</h4>
            <p className="max-w-sm text-gray-600">
              Traditional Italian recipes passed down through four generations
              of our family.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex h-15 w-15 items-center justify-center rounded-full bg-[#FEF3C7] p-2">
            <RiLeafLine className="text-2xl text-[#d97706]" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Made with Love</h4>
            <p className="max-w-sm text-gray-600">
              Every dish is carefully crafted with passion and served with
              genuine Italian hospitality.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex h-15 w-15 items-center justify-center rounded-full bg-[#FEF3C7] p-2">
            <FaRegHeart className="text-2xl text-[#d97706]" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Fresh Ingredients</h4>
            <p className="max-w-sm text-gray-600">
              Only the finest ingredients, many imported directly from Italy for
              authentic flavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
