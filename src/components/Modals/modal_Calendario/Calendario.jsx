import React, { useState } from "react";
import "./calendario.css";
function Calendario() {
  const [date, setDate] = useState(new Date());

  const daysOfWeek = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };
  const handleDateClick = (day) => {
    console.log(day);
  };

  const month = date.getMonth();
  const year = date.getFullYear();

  const numDaysInMonth = daysInMonth(month, year);
  const firstDayIndex = firstDayOfMonth(month, year);

  let days = [];

  for (let i = 1; i <= numDaysInMonth; i++) {
    days.push(i);
  }

  for (let i = 0; i < firstDayIndex; i++) {
    days.unshift(null);
  }

  const rows = [];
  let cells = [];

  days.forEach((day, index) => {
    if (index % 7 !== 0) {
      cells.push(day);
    } else {
      rows.push(cells);
      cells = [day];
    }
    if (index === days.length - 1) {
      rows.push(cells);
    }
  });
  return (
    <div className="calendar">
      <div className="calendarMonth">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <span>
          {monthNames[month]} {year}
        </span>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th className="calendarDay" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((day, index) => (
                <td
                  className="calendarNumber"
                  key={index}
                  onClick={() => handleDateClick(day)}
                >
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Calendario };
