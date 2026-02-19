import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos || !exerciseVideos.length) {
    return (
      <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" } }}
          fontWeight={700}
          color="#000"
          mb="33px"
        >
          Watch{" "}
          <span style={{ color: "#ED3E54", textTransform: "capitalize" }}>
            {name}
          </span>{" "}
          exercise videos
        </Typography>
        <Typography sx={{ fontSize: { lg: "20px", xs: "16px" } }} color="#666">
          No videos available at the moment.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#ED3E54", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => {
          // Safety checks for nested data
          if (!item || !item.video) return null;

          const videoId = item.video.videoId;
          const thumbnailUrl = item.video.thumbnails?.[0]?.url;
          const videoTitle = item.video.title || "No title";
          const channelName = item.video.channelName || "Unknown channel";

          if (!videoId || !thumbnailUrl) return null;

          return (
            <a
              key={videoId}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={thumbnailUrl}
                alt={videoTitle}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {videoTitle}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
