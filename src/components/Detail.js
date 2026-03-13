import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;
  const [imageError, setImageError] = React.useState(false);

  const extraDetail = [
    {
      id: "bodyPart",
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      id: "target",
      icon: TargetImage,
      name: target,
    },
    {
      id: "equipment",
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      {imageError ? (
        <Stack
          sx={{
            width: { lg: "744px", xs: "100%" },
            height: { lg: "744px", xs: "400px" },
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "48px", xs: "32px" },
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "capitalize",
              mb: 3,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: { lg: "24px", xs: "18px" },
              textAlign: "center",
              mb: 2,
            }}
          >
            Target: {target}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { lg: "20px", xs: "16px" },
              textAlign: "center",
            }}
          >
            Body Part: {bodyPart} • Equipment: {equipment}
          </Typography>
        </Stack>
      ) : (
        <img
          src={gifUrl || `https://v2.exercisedb.io/image/${id}`}
          alt={name}
          loading="lazy"
          className="detail-image"
          onError={() => setImageError(true)}
        />
      )}
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.id} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
