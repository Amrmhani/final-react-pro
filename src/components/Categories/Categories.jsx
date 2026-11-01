
import {
  Alert,
  Box,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useCategories } from "../../hooks/UseCategories";
import Categoryitem from "./Categoryitem";

export default function Categories() {
  const { data, isPending, isError } = useCategories();

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        Failed to load categories.
      </Alert>
    );
  }

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 2 }}
      >
        Categories
      </Typography>

      <Box sx={{ display: "grid", gap: 2,
        gridTemplateColumns:{
            xs:"repeat(2,1fr)",
            sm:"repeat(3,1fr)",
            md:"repeat(4,1fr)",
        

        }
       }}>
        {data?.map((category) => (
            
          <Categoryitem category={category}     key={category.id}/>
        ))}
      </Box>
    </Box>
  );
}
