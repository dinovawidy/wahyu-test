import React from "react";

const DateFilter = ({ onDateChange }) => {
  const handleDateChange = (e) => {
    const rawDate = e.target.value; 
    if (!rawDate) {
      onDateChange(""); 
      return;
    }

    const [year, month, day] = rawDate.split("-");
    const formattedDate = `${day}-${month}-${year}`; 
    onDateChange(formattedDate);
  };
  return (
    <div>
      <input
        type="date"
        className="border p-2 rounded w-full"
        //value={value}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateFilter;
