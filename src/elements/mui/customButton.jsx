import { Button } from '@mui/material';
import React from 'react'

export default function CustomMUIButton({ outlined, className, endIcon, children }) {
  return (
    <Button
      className={`${
        outlined
          ? " text-secondary border-secondary"
          : " bg-secondary  text-primary border-secondary"
      } rounded-full px-[20px] py-[8px] font-semibold capitalize`}
      variant={`${outlined ? "outlined" : "contained"}`}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
}
