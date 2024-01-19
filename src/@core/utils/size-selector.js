const SizeSelector = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="flex items-center mt-4">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex justify-center items-center mr-2"
          onClick={() => onSelect(option)}
        >
          <div
            className={`w-8 h-8 border-2 rounded-full items-center mx-auto flex justify-center cursor-pointer ${
              selectedOption === option ? "border-primary" : "border-gray-300"
            }`}
          >
            <span
              className={`mx-auto ${
                selectedOption === option ? "text-primary" : "text-black"
              }`}
            >
              {option?.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
