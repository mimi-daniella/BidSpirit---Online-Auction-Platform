“This README was updated post-deadline for clarity and troubleshooting only—no project code was modified.”


**If you encounter a persistent “Loading...” screen after cloning and running the project, it’s likely due to the firstName popup prompt not rendering correctly.
Quick Fix:
Open your browser’s developer console and run:
localStorage.setItem("firstName", "YourNameHere");
localStorage.setItem("visits", "1");
sessionStorage.setItem("visitCounted", "true");
Then refresh the page. This should allow the application to load as intended.
