1) Initial Steps for Testing
2) npm i vitest  -D
3) npm i @testing-library/react -D
4) npm i jsdom  -D
5) npm i @testing-library/jest-dom -D
6) npm i @vitest/ui  -D

7) Package.json ->scripts
 “test”:”vitest”
“test:ui ”: “vitest —ui”

8) //vitest.config.ts
import { defineConfig } from "vitest/config";
export default defineConfig({
    test:{
        environment:'jsdom'
    }
})




10) //
Create components folder in src 
then  create components

11) create folder in your project name Test
in side test you have to create components.test.tsx file

12) npm run test:ui
for run this command and this command redirect you to vitest where you can check test cases based on your it
 function inside your describe
