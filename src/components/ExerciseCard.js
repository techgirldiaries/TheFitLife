import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      {imageError ? (
        <div
          style={{
            width: "100%",
            height: "326px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "capitalize",
              mb: 2,
            }}
          >
            {exercise.name}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {exercise.bodyPart} • {exercise.target}
          </Typography>
        </div>
      ) : (
        <img
          src={
            exercise.gifUrl || `https://v2.exercisedb.io/image/${exercise.id}`
          }
          alt={exercise.name}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      )}
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
};

export default ExerciseCard;
