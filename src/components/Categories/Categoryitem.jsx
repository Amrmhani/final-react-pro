
import { Card, CardContent, Typography } from "@mui/material";

export default function Categoryitem({ category }) {
  return (
    <Card>
      <CardContent sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h5">
          {category.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
