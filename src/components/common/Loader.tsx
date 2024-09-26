import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      position="absolute"
      display="flex"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      zIndex={1}
    >
      <CircularProgress size="80px" />
    </Box>
  );
};
