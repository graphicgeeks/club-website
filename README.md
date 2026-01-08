# Club Website

Welcome to this project! This repository follows a **strict and structured Git workflow** to ensure clean history, safe releases, and smooth collaboration. Please read this guide carefully before contributing.

---

## 🚀 Contributing

Thank you for your interest in contributing! This project uses a **protected-branch, version-based workflow**.

### 🔐 Branch Protection & Versioning

* **`main`** → **Release-only branch**

  * Fully protected
  * Contains only **stable, production-ready releases**
  * No direct development or feature PRs

* **`v1.0`** → **Active development branch**

  * Current stable version under development
  * All feature, bugfix, and refactor PRs must target this branch

* **Future versions** (e.g. `v2.0`)

  * Created only for major redesigns or breaking changes

**Current Versions:**

* 🟢 **v1.0** — Active & stable
* 🔴 **v2.0** — Planned major overhaul

> ⚠️ **Never push directly to `main`.**
> ⚠️ **Never open PRs directly to `main`.**

---

## 🌿 Branching Conventions

Always create branches **from the latest `v1.0` branch**.

```bash
git checkout v1.0
git pull origin v1.0
git checkout -b feature/<short-description>
```

### Branch Types

* 🌿 **Feature**: `feature/<short-description>`
  *Example*: `feature/theme-toggle`

* 🐞 **Bugfix**: `bugfix/<short-description>`
  *Example*: `bugfix/fix-navbar-spacing`

* ♻️ **Refactor**: `refactor/<short-description>`
  *Example*: `refactor/theme-context`

> Keep branch names short, descriptive, and lowercase.

---

## 📝 Commit Message Conventions

This project follows **Conventional Commits**.

**Format:**

```
<type>(optional-scope): short present-tense description
```

**Types:**

* `feat` – new feature
* `fix` – bug fix
* `docs` – documentation changes
* `chore` – tooling / maintenance
* `refactor` – code restructuring (no behavior change)

**Examples:**

* `feat(auth): add login form`
* `fix(header): align navigation links`
* `refactor(theme): replace next-themes with custom context`
* `docs(readme): update contribution guide`

---

## 🔀 Pull Requests (PRs)

### Target Branch

* ✅ **All PRs must target `v1.0`**
* ❌ **PRs to `main` are not allowed**

### PR Title Format

```
<type>: short description
```

*Example*: `feat: add theme toggle`

### PR Description Must Include

* **What changed**
* **Why it changed**
* **How to test**

### Rules

* PRs require **repo owner approval**
* Contributors **must not merge their own PRs**
* All status checks must pass before merge

---

## 🔄 Release Flow

Only the **repo owner** performs releases.

```
feature/* or bugfix/*
        ↓
      v1.0   (integration & testing)
        ↓
      main   (stable release)
```

* Merging `v1.0` → `main` represents a **versioned release**
* No direct commits or PRs into `main`

---

## 🔧 Local Development

```bash
# Clone the repo
git clone <YOUR_GIT_URL>

# Go to project folder
cd <PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## ✅ Status Checks & CI

* All PRs must pass:

  * Automated tests
  * Linters
  * Build checks
* Merging is blocked if checks fail
* Only the repo owner can merge after checks pass

---

## 📌 Additional Notes

* Always pull the latest `v1.0` before starting work
* Keep branches short-lived
* Delete branches after merge
* Follow naming conventions strictly
* For workflow or versioning questions, contact the repo owner

---

🤝 **Thank you for contributing!**
Following this workflow keeps the project stable, readable, and production-ready.
 