# The Minnesota Star Tribune Technical Assessment

This is a full stack repository using:

- **Frontend**: [Next.js](https://nextjs.org/) (App Router) + [Tailwind CSS](https://tailwindcss.com/) + TypeScript 
- **Backend** [Nest.js](https://nestjs.com/) + [GraphQL](https://graphql.org/) + TypeScript

---

## 🛠 Getting Started

### Create Your Own Copy

Click the green "Use this template" button at the top of the repository page to create your own **public** copy under your GitHub account.

Once created, clone it to your local machine:

```bash
git clone git@github.com:your-username/your-repo-name.git
cd your-repo-name
```

### Install Dependencies
```bash
yarn install
````

### Check Out the Correct Assessment Branch
You’ll complete your work on a specific branch depending on your role and assessment type.

📬 Check your invitation email for the name of the branch you should use — for example, `mid-level-assessment/frontend`.

Fetch all branches and switch to the correct one:

```
git checkout mid-level-assessment/frontend  # Replace with the branch specified in your email
```

## Controls
### Start the Frontend (Next.js)
```bash
yarn dev:web
```
Runs the Next.js app in development mode

Available at http://localhost:3000

### Run Tests
```bash
yarn test
```
You can also run tests in individual apps by running `yarn workspace web test` or `yarn workspace api test`
