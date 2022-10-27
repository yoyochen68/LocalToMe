import ShortTextInput from "../ShortTextInput";
import LongTextInput from "../LongTextInput";
import DateInput from "../DateInput";
import DateCalendar from "../DateCalendar";
import TimeInput from "../TimeInput";
import { useState } from "react";
import styled from "styled-components";
import TopBanner from "../TopBanner";
import GeneralGreenBtn from "../GeneralGreenBtn";

const Form = styled.form`
  width: 80vw;
  margin: 5vw 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    width: 100%;
  }
`;

const LayoutTime = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

const To = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-left: 5%;
`;

export default function EventForm({
  onTogglePreview,
  event,
  onChangeEventName,
  onChangeEventCreator,
  onChangeEventLocation,
  onChangeEventStartDate,
  onChangeEventStartTime,
  onChangeEventEndDate,
  onChangeEventEndTime,
  onChangeEventDescription,
  onChangeEventImage,
  onChangeEventTags,
}) {
  const [calendarType, setCalendarType] = useState(1);

  function handleSelectStartDate() {
    setCalendarType(1);
  }

  function handleSelectEndDate() {
    setCalendarType(0);
  }
  function handleChangeEventName(eventName) {
    onChangeEventName(eventName);
  }

  function handleChangeEventCreator(eventCreator) {
    onChangeEventCreator(eventCreator);
  }

  function handleChangeEventLocation(eventLocation) {
    onChangeEventLocation(eventLocation);
  }

  function handleChangeEventStartDate(eventStartDate) {
    onChangeEventStartDate(eventStartDate);
  }

  function handleChangeEventStartTime(eventStartTime) {
    onChangeEventStartTime(eventStartTime);
  }

  function handleChangeEventEndDate(eventEndDate) {
    onChangeEventEndDate(eventEndDate);
  }

  function handleChangeEventEndTime(eventEndTime) {
    onChangeEventEndTime(eventEndTime);
  }

  function handleChangeEventDescription(eventDescription) {
    onChangeEventDescription(eventDescription);
  }

  function handleChangeEventImage(eventImage) {
    onChangeEventImage(eventImage);
  }

  function handleChangeEventTags(eventTags) {
    onChangeEventTags(eventTags);
  }

  function handleTogglePreview(e) {
    e.preventDefault();
    onTogglePreview();
  }

  return (
    <>
      <TopBanner text={"Plan your Event"} />
      <Form onSubmit={handleTogglePreview}>
        <b>Basic Information</b>
        <br></br>
        <ShortTextInput
          label="Event Name"
          value={event.eventName}
          onChange={handleChangeEventName}
          required={true}
        />
        <br></br>
        <ShortTextInput
          label="Event Host"
          value={event.eventCreator}
          onChange={handleChangeEventCreator}
          required={true}
        />
        <b style={{ marginTop: "5%" }}>Location of your Event</b>
        <ShortTextInput value={event.eventLocation} onChange={handleChangeEventLocation} />
        <b style={{ marginTop: "5%" }}>Date & Time of your Event</b>
        <br></br>
        <LayoutTime>
          <div>
            <DateInput
              selected={calendarType}
              label="Start Date"
              required={true}
              date={event.start.toLocaleString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              onSelectDate={handleSelectStartDate}
            />
            <br></br>
            <TimeInput
              label="Start Time"
              required={true}
              time={event.start.toLocaleString("default", { hour: "2-digit", minute: "2-digit", hour12: false })}
              onChangeTime={handleChangeEventStartTime}
            />
          </div>
          <To>
            <b>to</b>
          </To>
          <div>
            <DateInput
              selected={calendarType == 0}
              label="End Date"
              date={event.end.toLocaleString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              onSelectDate={handleSelectEndDate}
            />
            <br></br>
            <TimeInput
              label="End Time"
              time={event.end.toLocaleString("default", { hour: "2-digit", minute: "2-digit", hour12: false })}
              onChangeTime={handleChangeEventEndTime}
            />
          </div>
        </LayoutTime>
        {calendarType ? (
          <DateCalendar
            date={event.start}
            minDate={new Date}
            onChangeDate={handleChangeEventStartDate}
          />
        ) : (
          <DateCalendar
            date={event.end}
            minDate={event.start}
            onChangeDate={handleChangeEventEndDate}
          />
        )}
        <b style={{ marginTop: "5%" }}>Describe your Event</b>
        <br></br>
        <LongTextInput onChange={handleChangeEventDescription} onChangeImage={handleChangeEventImage}></LongTextInput>
        {/* <b style={{ marginTop: "5%" }}>Select Event Tags</b> */}
        <GeneralGreenBtn type="submit" text="Continue" />
      </Form>
    </>
  );
}