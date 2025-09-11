**Responsive Layout Notes**

This project implements a responsive layout for the Zwara website. The design was provided in Figma, but since Figma uses its own pixel density and scaling, the implementation required adjustments when converting into actual CSS breakpoints.

📐 Breakpoints Used

Instead of copying Figma’s raw frame widths, I created logical breakpoints to align better with common device sizes and responsive practices:

375px (mobile) → baseline for iPhone SE / small devices

768px (tablet) → standard tablet breakpoint (iPad portrait)

1440px (large desktop) → wide desktop screens

Additional in-between adjustments can be added if necessary, but these three sizes cover the majority of devices.

