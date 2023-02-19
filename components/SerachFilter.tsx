import React, { useState } from "react";

export default function SerachFilter({
  properties,
  filter,
}: {
  properties: any;
  filter: any;
}) {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sqmt, setSqmt] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleLocationChange = (event: any) => {
    setLocation(event.target.value);
  };

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };

  const handleSqmtChange = (event: any) => {
    setSqmt(event.target.value);
  };

  const handlePropertyTypeChange = (event: any) => {
    console.log(event.target.value);
    setPropertyType(event.target.value);
  };

  const handleFilterClick = () => {
    let tempProperties = properties;

    if (location !== "") {
      tempProperties = tempProperties.filter(
        (property: any) =>
          property.location.toLowerCase() === location.toLowerCase()
      );
    }

    if (price !== "") {
      tempProperties = tempProperties.filter(
        (property: any) => property.price <= parseInt(price)
      );
    }

    if (sqmt !== "") {
      tempProperties = tempProperties.filter(
        (property: any) => property.sqMt >= parseInt(sqmt)
      );
    }

    if (propertyType !== "") {
      tempProperties = tempProperties.filter(
        (property: any) => property.type.toLowerCase() === propertyType.toLowerCase()
      );
    }
    // console.log(tempProperties);
    setLocation("");
    setSqmt("");
    setPrice("");
    setPropertyType("");
    filter(tempProperties);

  };

  return (
    <div className="m-4 lg:m-0">
      <div className="p-8 bg-white lg:flex lg:items-center lg:justify-center">
        <div className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 lg:flex-nowrap">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0 mx-auto">
            <label htmlFor="propertyType" className="text-gray-800 font-medium">
              Property Type
            </label>
            <select
              id="propertyType"
              className="block w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              value={propertyType}
              onChange={handlePropertyTypeChange}
            >
              <option value="">All</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0 mx-auto">
            <label htmlFor="location" className="text-gray-800 font-medium">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="block w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter a location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0 mx-auto">
            <label htmlFor="location" className="text-gray-800 font-medium">
              Square Meter
            </label>
            <input
              type="text"
              id="location"
              className="block w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter a SqMt"
              value={sqmt}
              onChange={handleSqmtChange}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0 mx-auto">
            <label htmlFor="price" className="text-gray-800 font-medium">
              Price
            </label>
            <input
              type="text"
              id="price"
              className="block w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter a price"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-4 sm:mb-0 mx-auto  lg:self-end">
            <button
              className="px-8 py-2 text-blue-100 bg-blue-600 rounded "
              onClick={handleFilterClick}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
