import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      onError={(e) => {
        console.error("Failed to load image:", exercise.gifUrl);
        e.target.style.backgroundColor = "#f0f0f0";
        e.target.style.display = "flex";
        e.target.style.alignItems = "center";
        e.target.style.justifyContent = "center";
      }}
    />
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#ED3E54",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#3D426B",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
