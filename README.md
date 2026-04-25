🎮 Assembly Endgame

A React-based word guessing game inspired by Hangman, built as part of a Scrimba learning project. The game challenges players to guess a hidden word one letter at a time before running out of attempts, with each incorrect guess progressively “eliminating” programming languages as visual feedback.

The project was developed by following structured instructions from Scrimba while independently implementing the logic, component structure, and UI styling based on a provided Figma design.

🧱 Features
- Interactive letter-based guessing system
- Dynamic game state handling (win/lose conditions)
- Visual feedback using language “elimination” system
- Keyboard component with disabled and state-based styling
- Confetti animation on win condition
- Accessible UI with ARIA live regions for screen readers
- Restart functionality for replayability

🛠️ Tech Stack
- React (useState, derived state patterns)
- JavaScript (game logic & state management)
- clsx (conditional class handling)
- CSS (Figma-based styling implementation)
- React Confetti (win animation)

🧠 What I Learned

This project helped reinforce core React concepts, especially state management and derived state logic in a real interactive application. I also improved my ability to translate a Figma design into a functional UI, focusing on consistent styling, responsive layout decisions, and visual feedback systems.

<img width="1302" height="732" alt="Screenshot (1010)" src="https://github.com/user-attachments/assets/d0dbc1e3-9721-49b5-a153-6449c1cd5ad0" />
<img width="1238" height="696" alt="Screenshot (1009)" src="https://github.com/user-attachments/assets/386517a3-6e94-4874-a1b2-5af39393c8c9" />
<img width="1210" height="681" alt="Screenshot (1008)" src="https://github.com/user-attachments/assets/6bb03744-98cc-484d-8f06-54fb464427e4" />
<img width="1696" height="954" alt="Screenshot (1011)" src="https://github.com/user-attachments/assets/02100a90-2eb1-4678-b2f7-f178c0f68f44" />


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
