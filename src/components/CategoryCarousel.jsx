import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "Data Scientist",
  "Cloud Engineer",
  "Machine learning Engineer",

  "SDE 1",
  "SDE 2",
  "SDE 3",
  "Full Stack ml Engineer",
];
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-5xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/3">
              <Button className="w-full rounded-full" variant="outline">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
