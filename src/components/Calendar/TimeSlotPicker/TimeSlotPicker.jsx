/*import styled from "@emotion/styled";*/
import { Chip, Stack, Divider } from "@mui/material";

export default function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const CustomChip = (props) => (
    <Chip
      label={props.label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": {
          ml: 0,
        },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={props.handleClick}
    />
  );

  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <p
            style={{
              width: '100%',
              fontSize: '14px',
              margin: 0,
              '@media (min-width: 900px)': {
                width: '15%',
                fontSize: '16px'
              }
            }}
          >
            Morning
          </p>
          {availableSlots.morning.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <p
            style={{
              width: '100%',
              fontSize: '14px',
              margin: 0,
              '@media (min-width: 900px)': {
                width: '15%',
                fontSize: '16px'
              }
            }}
          >
            Afternoon
          </p>
          {availableSlots.afternoon.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <p
            style={{
              width: '100%',
              fontSize: '14px',
              margin: 0,
              '@media (min-width: 900px)': {
                width: '15%',
                fontSize: '16px'
              }
            }}
          >
            Evening
          </p>
          {availableSlots.evening.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
