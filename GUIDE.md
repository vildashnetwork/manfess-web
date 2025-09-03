# Web – Naming Conventions & Design Standards

## 🎨 Color Palette

| Name            | Hex Code     | Usage                                  |
|-----------------|--------------|----------------------------------------|
| Primary Green   | #00A86B    | Buttons, highlights, status badges     |
| Black           | #000000    | Text, icons, sidebar background        |
| White           | #FFFFFF    | Backgrounds, cards, containers         |
| Light Gray      | #F5F5F5    | Table rows, hover states               |
| Alert Red       | #FF4C4C    | Overdue status, error messages         |
| Warning Yellow  | #FFC107    | Pending status, caution indicators     |
| Success Green   | #28A745    | Graded status, success messages        |

---

## 🗃️ Folder Structure

src/
├── components/
│   ├── Dashboard/
│   │   ├── MetricCard.jsx
│   │   ├── SubmissionTable.jsx
│   │   ├── NotificationPanel.jsx
│   │   └── Dashboard.css          # Styles specific to Dashboard components
│   ├── Teachers/
│   │   ├── TeacherCard.jsx
│   │   ├── RoleBadge.jsx
│   │   └── Teachers.css           # Styles for teacher-related components
│   ├── Students/
│   │   ├── StudentProfileCard.jsx
│   │   ├── AttendanceStatus.jsx
│   │   └── Students.css           # Styles for student-related components
│   ├── Reports/
│   │   ├── ReportChart.jsx
│   │   └── Reports.css            # Styles for report components
│   ├── Shared/
│   │   ├── SidebarNav.jsx
│   │   ├── TopNavBar.jsx
│   │   ├── Button.jsx
│   │   └── Shared.css             # Reusable UI styles (cards, buttons, badges)
├── pages/
│   ├── Dashboard.jsx
│   ├── Teachers.jsx
│   ├── Students.jsx
│   ├── Attendance.jsx
│   ├── Marks.jsx
│   ├── Reports.jsx
│   └── Settings.jsx
├── assets/
│   ├── icons/                     # SVGs or PNGs used across the app
│   └── images/                    # Logos, banners, etc.
├── styles/
│   ├── variables.css              # Design tokens: colors, spacing, typography
│   ├── layout.css                 # Grid system, containers, responsive rules
│   ├── typography.css             # Font families, sizes, weights
│   ├── forms.css                  # Input fields, labels, validation styles
│   └── global.css                 # Resets, base styles, scrollbars, etc.

<!-- Suggested based on the design feel free to add , suggest or modify  -->
---

## 📦 Component Naming Conventions

- Use **PascalCase** for all component files and folders  
  Example: `MetricCard`, `SubmissionTable`, `ReportChart`

- Prefix shared components with their domain when needed  
  Example: `TeacherCard`, `StudentProfileCard`

- Use `index.jsx` for default exports in folders with multiple components

---

## 🧩 UI Component Guidelines

### MetricCard

- Props: `title`, `value`, `icon`, `statusColor`
- Used on: Dashboard overview

### SubmissionTable

- Props: `submissions[]`, `onFilterChange`, `onRowClick`
- Used on: Dashboard, Marks page

### NotificationPanel

- Props: `notifications[]`, `onDismiss`, `onViewAll`
- Used on: Dashboard, Settings

### SidebarNav

- Props: `activeTab`, `onNavigate`
- Tabs: Dashboard, Teachers, Students, Attendance, Marks, Reports, Settings

---

## 🛠️ Status Badge Naming

| Status     | Class Name        | Color        |
|------------|-------------------|--------------|

## 📁 Folder Structure (React-based)

---

## 📦 Component Naming Conventions

- Use **PascalCase** for all component files and folders  
  Example: `MetricCard`, `SubmissionTable`, `ReportChart`

- Prefix shared components with their domain when needed  
  Example: `TeacherCard`, `StudentProfileCard`

- Use `index.jsx` for default exports in folders with multiple components

---

## 🧩 UI Component Guidelines

### MetricCard

- Props: `title`, `value`, `icon`, `statusColor`
- Used on: Dashboard overview

### SubmissionTable

- Props: `submissions[]`, `onFilterChange`, `onRowClick`
- Used on: Dashboard, Marks page

### NotificationPanel

- Props: `notifications[]`, `onDismiss`, `onViewAll`
- Used on: Dashboard, Settings

### SidebarNav

- Props: `activeTab`, `onNavigate`
- Tabs: Dashboard, Teachers, Students, Attendance, Marks, Reports, Settings

---

## 🛠️ Status Badge Naming

| Status     | Class Name        | Color        |
|------------|-------------------|--------------|
| Graded     | `.badge-success`  | Success Green (#28A745)  
| Submitted  | `.badge-warning`  | Warning Yellow (#FFC107)  
| Overdue    | `.badge-error`    | Alert Red (#FF4C4C)  

---

## 📐 Layout Standards

- Grid system: 12-column responsive layout  
- Spacing: Use multiples of `8px` for padding and margins  
- Font sizes:  
  - Heading: `24px`  
  - Subheading: `18px`  
  - Body: `14px`  
  - Caption: `12px`

---

## 🔒 Role-Based Access (for future logic)

| Role             | Permissions                                      |
|------------------|--------------------------------------------------|
| Admin            | Full access to all pages and settings            |
| Teacher          | Access to marks, submissions, student profiles   |
| Class Master     | Can view class-wide reports and attendance       |
| Head of Dept     | Can approve submissions and view department stats

---

## 📄 Documentation Tips

- Use this structure for README files and onboarding docs  
- Include screenshots of each page with component labels  
- Maintain consistency across desktop and mobile versions

---
