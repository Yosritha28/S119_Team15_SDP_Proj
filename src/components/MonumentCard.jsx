// src/components/MonumentCard.js

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function MonumentCard({ name, img, location, description }) {
  return (
    <Card sx={{ maxWidth: 320, margin: "16px" }}>
      <CardMedia component="img" height="180" image={img} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">{location}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginTop:1}}>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default MonumentCard;
