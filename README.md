# Initial Copilot Prompts - Project Submission

This document outlines the first five prompts used to guide the AI in developing the web application, ensuring 1:1 alignment with the required UI/UX.

## Reference Materials
* **Live Demo (UI/UX Reference):** https://app-01ef00d0.base44.app/
* **Demonstration Video:** https://github.com/user-attachments/assets/d7511103-6787-4914-a33e-cb9e77005d55

---

### Prompt 1: Foundation and Global Styling
**Goal:** Initialize the React project with RTL support and the base design system.

> "Set up a new React project using Vite and Tailwind CSS. The goal is to clone the UI found at https://app-01ef00d0.base44.app/ exactly. Configure the application for RTL (Right-to-Left) and use a modern Hebrew font. Define global CSS variables for the primary theme colors (Orange, Blue, Green) based on the status cards in the provided reference."

### Prompt 2: Header and Status Dashboard
**Goal:** Create the top section including the gradient title and the four status cards.

> "Create the Header and Status Dashboard components. The main title must have a linear gradient from orange to gold as seen in the reference. Below it, implement 4 status cards: 'Chapters in Reading', 'Chapters Read', 'Left for Raffle', and 'Completed Books'. Each card must have its specific border color, a soft box-shadow, and the corresponding icon as shown in the UI example."

### Prompt 3: Raffle Logic and Selection UI
**Goal:** Implement the state for 150 chapters and the random selection mechanism.

> "Implement the logic to manage 150 chapters. Create a state to track available and taken chapters. Build the raffle UI with two buttons: 'הגרילו פרק' (Raffle) and 'בחרו פרק מסוים' (Manual). When 'Raffle' is clicked, randomly select a free chapter and display it with 'I'll take it' (לקחתי את הפרק) or 'Shuffle another' options, matching the flow in this video: https://github.com/user-attachments/assets/d7511103-6787-4914-a33e-cb9e77005d55."

### Prompt 4: Active Reading List Management
**Goal:** Build the list where selected chapters are tracked and updated.

> "Create the 'Chapters in Reading' list component. When a user confirms a chapter selection, it must be added to this list. Each list item should include the chapter number in a circular badge and two action buttons: 'View' (צפייה) and 'Finish' (סיימתי). Clicking 'Finish' should remove the item from the list and update the status counters in the dashboard."

### Prompt 5: Chapter Viewer and Visual Polish
**Goal:** Finalize the 1:1 UI matching and implement the text display functionality.

> "Final Polish: Ensure the UI is a 1:1 match with the provided reference. Implement the 'View' (צפייה) functionality so that clicking it displays the specific text on the left side of the layout, where the error message currently appears in the sample. Fix all paddings, margins, and shadows to ensure a professional 'Pixel Perfect' finish as required by the project instructions."
