import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      setIsLoading(true);
      try {
        let exercisesData = null;

        if (bodyPart === "all") {
          exercisesData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises?limit=100",
            exerciseOptions,
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions,
          );
        }

        if (
          exercisesData &&
          Array.isArray(exercisesData) &&
          exercisesData.length > 0
        ) {
          setExercises(exercisesData);
        } else {
          console.warn("No exercises data received");
          setExercises([]);
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setExercises([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise,
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (isLoading) return <Loader />;

  if (!exercises.length) {
    return (
      <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="46px"
          textAlign="center"
        >
          No exercises found. Try searching for something!
        </Typography>
      </Box>
    );
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
