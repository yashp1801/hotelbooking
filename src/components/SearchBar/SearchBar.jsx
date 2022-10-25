import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { FaCalendarDay } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "../SearchBar/searchBar.css";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, options, date } });
  };

  return (
    <div className="headerSearch">
      <div className="headerSearchItem">
        <FiSearch />
        <input
          required = "required"
          type="text"
          placeholder="where are you going?"
          className="headerSearchInput"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="headerSearchItem">
        <FaCalendarDay />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="headerSearchItem">
        <BsPersonFill />
        <span
          className="headerSearchSpan"
          onClick={() => setOpenOptions(!openOptions)}
        >{`${options.adult} adult ${options.room} room`}</span>
        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button
                  className="optionCounterBtn"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  disabled={options.adult <= 1}
                  className="optionCounterBtn"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button
                  className="optionCounterBtn"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  disabled={options.children <= 0}
                  className="optionCounterBtn"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button
                  disabled={options.room === 6}
                  className="optionCounterBtn"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  disabled={options.room <= 1}
                  className="optionCounterBtn"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
              </div>
            </div>
            {options.room === 6 && (
              <p className="optionItemMessage">
                {" "}
                Big Group? try <a href="#">booking.com</a> for 6+ rooms
              </p>
            )}
          </div>
        )}
      </div>
      <div style={{ border: "none" }} className="headerSearchItem">
        <button className="headerBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
