"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Stack from "@mui/material/Stack";
import Button, { type ButtonProps } from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

// wrap MUI Button with framer-motion
const MotionButton = motion<ButtonProps>(Button);

export const NavbarItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Project", href: "/project" },
  { name: "Message", href: "/message" },
];

export const Navbar = () => {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ 
        height: 56,
        border: '1px solid',
        borderColor: 'grey.500',
        borderRadius: '99px',
        px: 2,
        py: 5,
      }}
    >
      {NavbarItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <MotionButton
            key={item.name}
            variant="text"
            component={Link}
            href={item.href}
            color="primary"
            size="large"
            initial="rest"
            // animate to "hover" if active, otherwise animate on hover only
            animate={isActive ? "hover" : undefined}
            whileHover="hover"
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "9999px",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              letterSpacing: "0.5px",
              fontSize: "1.2rem",
            }}
          >
            {item.name}

            {/* underline animation */}
            <motion.div
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 4,
                left: 2,
                width: "100%",
                height: 2,
                backgroundColor: theme.palette.primary.main,
                transformOrigin: "left center",
              }}
            />
          </MotionButton>
        );
      })}
    </Stack>
  );
};
