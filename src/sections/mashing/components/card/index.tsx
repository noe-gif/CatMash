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

export const MashCard = () => {
  return (
    <CardContainer className={cardContainerStyles}>
      <CardBody className={cardBodyStyles}>
        <CardItem translateZ="100" className="w-full">
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="thumbnail"
            sx={cardImageStyles}
          />
        </CardItem>
        <CardItem translateZ="50" className={cardTitleStyles}>
          Make things float in air
        </CardItem>
        <CardItem as="p" translateZ="60" className={cardTextStyles}>
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
