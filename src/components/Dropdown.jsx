
import { Globe, MapPin } from "lucide-react";

const countries = [
  { name: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
  { name: "United States", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
];

const Dropdown = ({ country, city, onChange, onValidityChange }) => {
  const selectedCountry = countries.find((c) => c.name === country);

  const handleChange = (e) => {
    onChange(e);

    if (onValidityChange) {
      const { name, value } = e.target;
      const isValid = value.length >= 2;
      onValidityChange(name, isValid);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Globe className="absolute top-3 left-3 text-gray-400" />
        <select
          name="country"
          value={country}
          onChange={handleChange}
          required
          className="pl-10 pr-4 py-2 rounded-lg w-full text-black"
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <MapPin className="absolute top-3 left-3 text-gray-400" />
        <select
          name="city"
          value={city}
          onChange={handleChange}
          required
          disabled={!selectedCountry}
          className="pl-10 pr-4 py-2 mb-3 rounded-lg w-full text-black"
        >
          <option value="">Select City</option>
          {selectedCountry &&
            selectedCountry.cities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
