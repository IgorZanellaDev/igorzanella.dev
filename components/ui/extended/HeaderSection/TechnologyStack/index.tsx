import React, { useState } from "react";
import CategoryButton from "components/ui/extended/HeaderSection/TechnologyStack/CategoryButton";
import TechnologyElement from "components/ui/extended/HeaderSection/TechnologyStack/Technology";
import { TechnologyCategory } from "types/technology";
import { TECHNOLOGIES } from "constants/technology";
import Animation from "components/core/Animation";

const TechnologyStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechnologyCategory>(
    TechnologyCategory.Frontend
  );

  return (
    <div className="container pt-10 lg:w-6/12">
      <div className="flex justify-start items-start flex-col space-y-10">
        <Animation type={"fadeInUp"}>
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold text-white">
            Technology skills
          </h2>
        </Animation>
        <Animation
          type={"fadeInUp"}
          className="w-full flex flex-col space-y-4 md:space-y-4"
        >
          <div className="flex md:justify-start justify-between item-start flex-row space-x-3 xl:space-x-14 md:space-x-4 border-gray-700 border-b w-full h-full">
            <CategoryButton
              active={selectedCategory === TechnologyCategory.Frontend}
              onClick={() => setSelectedCategory(TechnologyCategory.Frontend)}
            >
              Frontend
            </CategoryButton>
            <CategoryButton
              active={selectedCategory === TechnologyCategory.Backend}
              onClick={() => setSelectedCategory(TechnologyCategory.Backend)}
            >
              Backend
            </CategoryButton>
            <CategoryButton
              active={selectedCategory === TechnologyCategory.Devops}
              onClick={() => setSelectedCategory(TechnologyCategory.Devops)}
            >
              DevOps
            </CategoryButton>
            <CategoryButton
              active={selectedCategory === TechnologyCategory.Other}
              onClick={() => setSelectedCategory(TechnologyCategory.Other)}
            >
              Other
            </CategoryButton>
          </div>
          <div className="w-full flex justify-center xl:justify-start items-center flex-row flex-wrap -mx-4">
            {TECHNOLOGIES.filter(
              (technology) => technology.category === selectedCategory
            ).map((technology, i) => (
              <TechnologyElement
                technology={technology}
                index={i}
                key={technology.name}
              />
            ))}
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default TechnologyStack;
