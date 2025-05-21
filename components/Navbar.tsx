"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const PURPLE_COLOR = '#4F46E5';

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
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '99px',
        px: 2,
        py: 5,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transform: 'translateY(-2px)',
        }
      }}
    >
      {NavbarItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <motion.div
            key={item.name}
            initial="rest"
            animate={isActive ? "hover" : undefined}
            whileHover="hover"
            style={{
              perspective: '1000px',
            }}
          >
            <Button
              variant="text"
              component={Link}
              href={item.href}
              size="large"
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
                background: 'transparent',
                color: PURPLE_COLOR,
                boxShadow: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-1px) scale(1.02)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  background: 'rgba(255, 255, 255, 0.05)',
                }
              }}
            >
              {item.name}

              {/* underline animation */}
              <motion.div
                variants={{
                  rest: { scaleX: 0, opacity: 0 },
                  hover: { scaleX: 1, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 2,
                  width: "100%",
                  height: 2,
                  backgroundColor: PURPLE_COLOR,
                  transformOrigin: "left center",
                  opacity: isActive ? 1 : 0.7,
                }}
              />
            </Button>
          </motion.div>
        );
      })}
    </Stack>
  );
};
