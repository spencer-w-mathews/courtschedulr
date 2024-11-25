import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [courtType, setCourtType] = useState("Pickleball");
  const [duration, setDuration] = useState("1 Hour");
  const [time, setTime] = useState("3:00 PM");

  const handleDateChange = (direction) => {
    setSelectedDate(
      direction === "prev"
        ? selectedDate.subtract(1, "day")
        : selectedDate.add(1, "day")
    );
  };

  const handleSubmit = () => {
    alert(`Court Type: ${courtType}\nDate: ${selectedDate.format("dddd, MMM D, YYYY")}\nDuration: ${duration}\nTime: ${time}`);
  };

  return (
    <Container>
      <Header>
        <span>3<sup>rd</sup> Shot</span>{" "}
        <span className="highlight">PICKLEBALL</span>
      </Header>

      <FormWrapper>
        {/* Court Type */}
        <Label>
          Court Type:
          <select
            value={courtType}
            onChange={(e) => setCourtType(e.target.value)}
          >
            <option value="Pickleball">Pickleball</option>
            <option value="Tennis">Tennis</option>
          </select>
        </Label>

        {/* Date Navigation */}
        <DateNavigation>
          <button onClick={() => handleDateChange("prev")}>◀</button>
          <Date>
          {selectedDate.format("ddd, MMM D, YYYY")}
          </Date>
          <button onClick={() => handleDateChange("next")}>▶</button>
        </DateNavigation>

        {/* Duration */}
        <Label>
          How long do you want to play?
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="1 Hour">1 Hour</option>
            <option value="2 Hours">2 Hours</option>
            <option value="2 Hours">3 Hours</option>
            <option value="2 Hours">4 Hours</option>
            <option value="2 Hours">5 Hours</option>
          </select>
        </Label>

        {/* Time */}
        <Label>
          Available Times:
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
        </Label>

        {/* Submit */}
        <SubmitButton onClick={handleSubmit}>Finish & Pay</SubmitButton>
      </FormWrapper>
    </Container>
  );
};

export default Booking;

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
`;

const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 1.5em;

  span {
    font-weight: bold;
    font-size: 1.5em;
    color: #222;
  }

  .highlight {
    color: #32cd32;
    font-size: 1.8em;
  }
`;

const FormWrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   width: 300px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  font-size: 14px;

  select {
    margin-left: 10px;
    padding: 5px;
    font-size: 14px;
    border-radius: 5px;
  }
`;

const DateNavigation = styled.div`
  margin: 15px auto;
  font-size: 18px;
  text-align: center;
  justify-content: space-between;

  display: flex;
  flex-direction: row;

  button {
    font-size: 18px;
    
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const Date = styled.div`
padding: 10px;
 border: 1px solid #333;
 border-radius: 50px;
`;

const SubmitButton = styled.button`
  background-color: #32cd32;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #28a428;
  }
`;
