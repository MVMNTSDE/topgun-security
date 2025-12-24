# Topgun Security System Guidelines

## General guidelines
* **Absolute Positioning**: Only use when necessary. Opt for responsive and well-structured layouts that use flexbox and grid by default.
* **Clean Code**: Refactor code as you go to keep code clean and modular.
* **File Structure**: Keep file sizes small. Put helper functions and components in their own files (Modular Component Architecture).
* **Persona Focus**: Every copy and UI decision must appeal to B2B decision-makers (CEOs, Procurement) in the Köln/NRW region.

## Design System Guidelines (Institutional / Rigid)
* **Theme**: Use the OKLCH theme system defined in `globals.css`.
* **Typography**: Bold, authoritative, and uppercase for headings to maintain a "Serious Dark Voice".
* **Motion**: Use Lenis smooth scroll for the global experience. Sync GSAP animations with the Lenis loop for cinematic fluidity.
* **Buttons**:
  * **Primary**: Filled accent color (`#FC4F4F`), uppercase, tracking-widest, transition-y on hover.
  * **Ghost**: Outlined primary color, font-black, uppercase.
* **Cards**: Use `.corp-card` with rigid borders and subtle shadow transitions.
* **Spacing**: Maintain large, clinical white space (rigid section gaps) to ensure an institutional feel.

## Component Specifics
* **Header**: Fixed, backdrop-blur, transitioning from transparent to solid white on scroll.
* **Services**: Modular grid with 3 columns (desktop) and 1 column (mobile).
* **About/Sektoren**: Clinical grid layouts with high-contrast text and subtle hover effects.
* **Contact**: Multi-field inquiry form targeting professional data (Company, Industry).
