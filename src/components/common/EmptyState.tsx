import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #888;
`;

export const EmptyState: FC<EmptyStateProps> = ({ title, description }) => (
  <EmptyContainer>
    <Typography variant="h6" mt={2}>
      {title}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </EmptyContainer>
);
