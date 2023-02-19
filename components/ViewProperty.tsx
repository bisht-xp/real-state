import React, { useState } from "react";
import PageNotFound from "./PageNotFound";
import PropertyCard from "./PropertyCard";
import SerachFilter from "./SerachFilter";

export default function ViewProperty({ properties }: { properties: any }) {
  const [property, setProperty] = useState(properties);
  const propertyFilter = (tempProperties: any) => {
    // console.log(tempProperties)
    setProperty(tempProperties);
  };
  return (
    <>
      <SerachFilter properties={properties} filter={propertyFilter} />
      {property.length !== 0 ? (
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.map((Property: any) => {
              return <PropertyCard property={Property} key={Property.id} />;
            })}
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
