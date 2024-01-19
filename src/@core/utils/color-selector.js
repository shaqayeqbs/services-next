const ColorSelector = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="flex justify-center p-1 items-center  ">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex items-center mx-1"
          onClick={() => onSelect(option)}
        >
          <div
            className={`w-4 h-4 border-2 rounded-full cursor-pointer ${
              selectedOption === option ? "border-primary" : "border-gray-300"
            }`}
            style={{
              backgroundColor: option?.color_code,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorSelector;
