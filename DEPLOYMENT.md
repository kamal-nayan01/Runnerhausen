# Deployment Instructions for RunnerHausen Game

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install the latest version of [Git](https://git-scm.com/).

## Deployment Steps
1. **Clone the Repository**  
   Open your terminal (Command Prompt / PowerShell / Bash) and run:
   ```bash
   git clone https://github.com/kamal-nayan01/runnerhausen.git
   cd runnerhausen
   ```

2. **Install Dependencies**  
   Inside the project directory, execute:
   ```bash
   npm install
   ```

3. **Build the Project**  
   To create a production-ready build, run:
   ```bash
   npm run build
   ```
   This will generate static files in the `dist` directory.

4. **Deploy to GitHub Pages**  
   - If you are using the `gh-pages` branch:
     ```bash
     git add dist/*
     git commit -m "Deploying to GitHub Pages"
     git push origin gh-pages
     ```
   - If you prefer using GitHub Actions, create a workflow file in `.github/workflows/` directory to automate the deployment.

## GitHub Pages Installation Instructions
1. **Navigate to your GitHub repository settings**.
2. **Scroll down to the GitHub Pages section**. 
3. **Select the branch that you need to serve from** (usually `gh-pages` or `main`).
4. **Save the settings**. Your site will be published at `https://<username>.github.io/<repo-name>/`.

## Notes
- Ensure you have configured your DNS settings if you are using a custom domain.
- To ensure that your site is up to date, regularly push any changes made in the main branch to the gh-pages branch or configure GitHub Actions accordingly.

---

Thank you for using the RunnerHausen game! Happy gaming!