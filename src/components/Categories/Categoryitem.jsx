import { Card, Chip } from '@mui/material';
import react from 'react';

export default function Categoryitem(category){
    return(
  <Card
             key={category.id}
            label={category.name}
            clickable
          />
    )
}