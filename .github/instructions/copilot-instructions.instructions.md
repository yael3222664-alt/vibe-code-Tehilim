# 📜 Copilot Instructions: Tehilim Together Project (Pixel-Perfect 1:1)

## 🏁 Project Overview
Build a React + TypeScript (TS) web application for randomizing and reading Tehilim chapters. The application must be a 100% exact replica of the reference site in terms of functionality, design, and flow. This project serves as a UI/UX prototype for the final application.

## 🛠️ Technical Stack & Standards
* **Framework**: React with Vite and TypeScript (TS).
* **Styling**: Tailwind CSS using the exact variables and classes provided in the reference CSS.
* **Architecture**: Modular component architecture, reusable UI elements (DRY principle), and strict separation of business logic (Hooks) from UI components.
* **RTL Support**: Full Hebrew support with Right-to-Left (RTL) layout.

## 🧠 Core Functionality & Logic
* **Data Source**: Use the provided `chapters.json` file as the "Single Source of Truth" for all 150 chapters.
* **State Management (useTehilim Hook)**:
    * Track chapter statuses: `available`, `reading`, or `completed`.
    * Sync the 4 top status cards in real-time.
    * Use `localStorage` to ensure progress persists after a page refresh.
* **The Lottery Flow**:
    1. **Draw (הגרלה)**: Randomly pick an 'Available' chapter.
    2. **Confirm**: User must click "I take this chapter" (אני לוקח את הפרק) to move it to the active list.
    3. **Alternative**: Option to "Draw another chapter" (הגרל לי פרק אחר).
* **Active List & Viewer**:
    * **Finished (סיימתי)**: Mark as read, remove from list, and update global stats instantly.
    * **View (צפייה)**: Display the specific chapter text in the side viewer area.

## ✅ DO & ❌ DON'T for Development

### ✅ DO
* **DO** use the exact CSS variables for colors, shadows, and borders to match the UI/UX 1:1.
* **DO** create a custom hook (`useTehilim`) to encapsulate all business logic.
* **DO** ensure the 4 status cards (Books, Remaining, Read, Reading) update instantly and accurately.
* **DO** use strict TypeScript interfaces for the Chapter object.
* **DO** implement "pixel-perfect" spacing and rounded corners (`rounded-2xl`).
* **DO** ensure the application is fully responsive and looks perfect on mobile devices.

### ❌ DON'T
* **DON'T** add any features, colors, or buttons not found in the original design.
* **DON'T** write long, monolithic components; keep them small, clean, and reusable.
* **DON'T** use `any` in TypeScript; maintain strict typing for all props and states.
* **DON'T** allow a chapter to be drawn twice if it is already in 'reading' or 'completed' status.
* **DON'T** forget to handle the "Error loading chapter" placeholder by replacing it with a clean text viewer.
