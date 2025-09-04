# 🧑‍💻 Frontend Collaboration Guide

This document outlines how we (Achenyu and teammate) will work together on the  admin frontend using GitHub. It ensures smooth collaboration, avoids merge conflicts, and keeps our codebase clean and scalable.

---

## 🚀 Branching Strategy

- `main`: Stable production-ready code
- `dev`: Integration branch for staging features
- `feature/*`: One branch per task or feature

### Examples :

- `feature/dashboard-ui` → Achenyu working on dashboard
- `feature/manage-teachers-ui` → Teammate working on teacher management

> Always branch off `dev`, never directly from `main`.

---

## 🔄 Workflow Summary

1. **Start Work**
   - Pull latest `dev`:  
     `git checkout dev && git pull origin dev`
   - Create your feature branch:  
     `git checkout -b feature/your-task-name`

2. **Work Locally**
   - Keep your changes scoped to your assigned folder:
     - Achenyu → `components/Dashboard/`
     - Teammate → `components/Teachers/`

3. **Push Often**
   - Push your branch to GitHub:  
     `git push origin feature/your-task-name`

4. **Create Pull Request**
   - PR from `feature/*` → `dev`
   - Add clear title and description
   - Tag teammate for review (`@username`)
   - Use GitHub review tools (comments, approvals)

5. **Merge and Sync**
   - Once approved, merge into `dev`
   - Pull latest `dev` before starting next task

---

## 🧠 Best Practices

- **Use meaningful commit messages**:
  - `feat: add mock result tabs to marks page`
  - `fix: correct spacing in metric cards`
  - `refactor: move button styles to Shared.css`

- **Avoid editing shared files simultaneously**:
  - Coordinate before touching files like `SidebarNav.jsx` or `variables.css`

- **Use GitHub Issues or Projects**:
  - Track tasks and assign them
  - Avoid overlapping work

- **Test before merging**:
  - Run the app locally
  - Check UI changes and console logs
  - Confirm no broken styles or layout shifts

---

## 🧩 Component Isolation

Keep work modular:

Use shared styles from:
- `styles/variables.css`
- `styles/layout.css`
- `styles/components.css`

---

## 🛠️ Optional Enhancements

- Add `.gitignore` to exclude `node_modules`, `.env`, etc.
- Add `README.md` with setup instructions and folder structure
- Add `CONTRIBUTING.md` to document this workflow

---

Let’s keep communication open, commit often, and build clean UI together.
