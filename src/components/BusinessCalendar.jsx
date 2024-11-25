import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styled from "styled-components";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const BusinessCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
    court: "Court 1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: formData.title,
      start: new Date(formData.start),
      end: new Date(formData.end),
      court: formData.court,
    };
    setEvents([...events, newEvent]);
    setFormData({ title: "", start: "", end: "", court: "Court 1" });
  };

  const EventComponent = ({ event }) => (
    <span>
      <strong>{event.title}</strong> <br />
      {event.court && <span>{event.court}</span>}
    </span>
  );

  return (
    <Container>
      {/* Sidebar */}
      <button onClick={() => setSideBarOpen(!sideBarOpen)} style={{position: "absolute", top: 5, left: 5, height: 20, border: '1px solid #fff', backgroundColor: "#ffffff"}}>
        ☰
      </button>
      <Sidebar style={{display: sideBarOpen ? 'block' :'none'}}>
        <Header>
          <h1>
            3<sup>rd</sup> Shot <span className="highlight">PICKLEBALL</span>
          </h1>
        </Header>

        <h3>Add/Edit Booking</h3>
        <Form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Event Title"
            required
          />

          <label>Start Time</label>
          <input
            type="datetime-local"
            name="start"
            value={formData.start}
            onChange={handleInputChange}
            required
          />

          <label>End Time</label>
          <input
            type="datetime-local"
            name="end"
            value={formData.end}
            onChange={handleInputChange}
            required
          />

          <label>Court</label>
          <select
            name="court"
            value={formData.court}
            onChange={handleInputChange}
          >
            <option value="Court 1">Court 1</option>
            <option value="Court 2">Court 2</option>
            <option value="Court 3">Court 3</option>
            <option value="Court 4">Court 4</option>
            <option value="Court 5">Court 5</option>
            <option value="Court 6">Court 6</option>
            <option value="Court 7">Court 7</option>
          </select>

          <button type="submit">Save Booking</button>
        </Form>
      </Sidebar>

      {/* Main Calendar */}
      <CalendarWrapper>
        <CourtsWrapper>
          <strong>Courts:</strong>
          {[1, 2, 3, 4, 5, 6, 7].map((court) => (
            <button key={court}>Court {court}</button>
          ))}
        </CourtsWrapper>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          min={new Date(2024, 0, 1, 8, 0)} // 8:00 AM
          max={new Date(2024, 0, 1, 22, 0)}
          style={{ height: 500 }}
          onSelectEvent={(event) => setSelectedEvent(event)}
          components={{
            event: EventComponent, // Custom renderer for events
          }}
        />
      </CalendarWrapper>
    </Container>
  );
};

export default BusinessCalendar;

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 30%;
  background: #f8f9fa;
  padding: 20px;
  border-right: 1px solid #ddd;
  box-sizing: border-box;

    @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 1.5em;
    color: #222;
  }

  .highlight {
    color: #32cd32;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  input,
  select,
  button {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
  }

  button {
    background-color: #32cd32;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #28a428;
    }
  }
`;


const CalendarWrapper = styled.div`
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
    flex: 2;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    flex: none;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  button {
    padding: 5px 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;

    &:hover {
      background: #f1f1f1;
    }
  }
`;

const CourtsWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 20px;
    background: white;
    cursor: pointer;

    &:hover {
      background: #f1f1f1;
    }
  }
`;
