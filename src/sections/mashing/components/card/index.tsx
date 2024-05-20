import React from 'react';
import { CardBody, CardContainer, CardItem } from 'src/components/custom/3d-card/3d-card';
import { Box } from '@mui/material';
import {
  cardBodyStyles,
  cardContainerStyles,
  cardImageStyles,
  cardTextStyles,
  cardTitleStyles,
} from './style';

type MashCardProps = {
  cat: {
    id: string;
    url: string;
    name: string;
    score: number;
  } | null;
};

export const MashCard = ({ cat }: MashCardProps) => {
  if (!cat) return null;

  return (
    <CardContainer className={cardContainerStyles}>
      <CardBody className={cardBodyStyles}>
        <CardItem translateZ="100" className="w-full">
          <Box component="img" src={cat.url} alt={cat.name} sx={cardImageStyles} />
        </CardItem>
        <CardItem translateZ="50" className={cardTitleStyles}>
          {cat.name}
        </CardItem>
        <CardItem as="p" translateZ="60" className={cardTextStyles}>
          Score: {cat.score}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
