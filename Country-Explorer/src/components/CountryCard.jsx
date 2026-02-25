function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={
          country.flags?.png ||
          "https://via.placeholder.com/300x200?text=No+Flag"
        }
        alt={country.name.common}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">
          {country.name.common}
        </h2>

        <p className="text-sm text-gray-600">
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Population:</strong>{" "}
          {country.population
            ? country.population.toLocaleString()
            : "N/A"}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Region:</strong> {country.region || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;