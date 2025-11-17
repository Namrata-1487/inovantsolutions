**Responsive Layout Notes**

This project implements a responsive layout for the Zwara website. The design was provided in Figma, but since Figma uses its own pixel density and scaling, the implementation required adjustments when converting into actual CSS breakpoints.

There are changes in font ---descision taken to0 enhance the look of webpage

## 📊 Responsiveness Decisions
for Padding and margin size varry from the figma design--- to enhance the look of design
1. **Font Scaling**  
   - Converted fixed px values in Figma to `rem` for fluid scaling. 
   - Three weights used: 300 (Light), 500 (Medium), 900 (Black).  

2. **Layout Adjustments**  
   - **Mobile (≤768px):**  
     - Navigation becomes a hamburger menu.  
     - Footer collapses into 2-column grid.  
     - Services/cards stack vertically.  

   - **Tablet (769px–1024px):**  
     - Footer expands to 3-column grid for better spacing.  
     - Container padding increased for balance.  

   - **Desktop (≥1440px):**  
     - Footer uses 6-column grid.  
     - Hero section spacing enlarged.  
     - Containers padded up to `140px`.  

3. **Images**  
   - Some mockup images (e.g., mobile app preview phones) intentionally **extend beyond the container** using `overflow: visible` for design consistency.  

4. **Footer**  
   - Built with CSS Grid.  
   - Collapses from 6 → 3 → 2 columns depending on device width.  

5. **Navigation**  
   - Transparent nav with scroll-based background transition.  
   - On scroll → background turns white + hover effects adjust.  


## 🚀 Improvements Over Figma

- Adjusted Figma px → CSS px for real-world readability wherever possible.  
- Added hover & interaction states (not shown in design).  
- Ensured consistent spacing across cards & carousel items.  
---


