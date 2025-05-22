# 🌱 Sign-Up Form with Real-Time Validation

A responsive and user-friendly sign-up form built with **React**, **Tailwind CSS**, and **Framer Motion**. This project includes live validation, password strength meter, and proper user feedback using `react-hot-toast`.

---

## 🚀 Features

- 🔐 Real-time form validation using HTML5 patterns
- ✅ Instant field validation feedback
- 💪 Password strength indicator
- 👁️ Toggle password visibility
- 🌐 Fully responsive and accessible
- 🎨 Clean, modern UI with TailwindCSS
- 🔔 Toast notifications for user feedback

---

## 🛠️ Tech Stack

- **React** – UI Library
- **Tailwind CSS** – Styling
- **Framer Motion** – Animations
- **Lucide React** – Icon set
- **React Hot Toast** – Toast notifications

---

## 📁 File Structure

src/
│
├── components/
│ ├── Input.jsx # Custom input component with validation
│ └── PasswordStrengthMeter.jsx # Password strength feedback
│
├── pages/
│ └── SignUpPage.jsx # Main Sign Up form
│
├── App.jsx # Root app
├── main.jsx # Entry point
└── index.css # Global styles



---

## ✅ Validation Rules

| Field        | Pattern/Logic                              |
|--------------|--------------------------------------------|
| First Name   | 2–20 letters only                          |
| Last Name    | 2–20 letters only                          |
| Username     | 3–16 alphanumeric characters               |
| Email        | Valid email format                         |
| Password     | Custom strength logic (length, mix, etc.)  |
| Phone No.    | Format: `+CountryCode XXXXXXXXXX`          |
| Country      | Only letters and spaces                    |
| City         | Only letters and spaces                    |
| PAN No.      | Format: `ABCDE1234F`                       |
| Aadhar No.   | Exactly 12 digits                          |

---

## 🧪 Running Locally

```bash
# Clone the repo
git clone https://github.com/Pankajkumar12345678/Form_Validation.git
cd Form_Validation

# Install dependencies
npm install

# Start the dev server
npm run dev
