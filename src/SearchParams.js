
import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
    const [location, updateLocation] = useState("Seattle, WA");
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
const [breeds, updateBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
  id="location"
  value={location}
  placeholder="Location"
  onChange={e => updateLocation(e.target.value)}
/>
<AnimalDropdown />
<BreedDropdown />

        </label>
 
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;