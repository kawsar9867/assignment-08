# 🌐 SkillSphere

SkillSphere is a modern, full-stack Learning Management System (LMS) designed to provide a seamless educational experience. Built with **Next.js 16**, it leverages high-performance server-side rendering and a polished UI using **HeroUI**.

---
## Live Link 
https://assignment-08-rose.vercel.app/
---

## 🚀 Features

*   **User Authentication:** Secure sign-up and login powered by **Better-Auth**, featuring email/password credentials and session management.
*   **Dynamic Profile Management:** Users can view and update their profiles with real-time feedback using `react-hot-toast`.
*   **Modern UI Components:** A sleek interface built with **HeroUI** (formerly NextUI) and **Tailwind CSS v4** for a truly responsive experience.
*   **Optimized Loading States:** Custom SVG-based loading skeletons to ensure a smooth transition between routes.
*   **Robust Backend:** Powered by **MongoDB** and **Mongoose** for scalable data storage and schema management.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router) |
| **Frontend UI** | HeroUI, Tailwind CSS v4 |
| **State/Auth** | Better-Auth, React Hooks (`useRef`, `useState`) |
| **Database** | MongoDB with Mongoose ODM |
| **Icons & Alerts** | Lucide React, React Hot Toast |

---

## 📂 Project Structure

Based on the current architecture:

*   **`src/app`**: Contains the main routing logic, including specialized files like `loading.js` and `not-found.js`.
*   **`src/lib`**: Centralized logic for database configurations (`mongoose`), authentication clients, and server-side auth logic.
*   **`src/components`**: Reusable UI elements to maintain design consistency.

---

## ⚙️ Installation & Setup

1.  **Clone the Repository:**
    
```bash
    git clone [https://github.com/your-username/skillsphere.git](https://github.com/your-username/skillsphere.git)
    cd skillsphere
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory and add your credentials:
    ```env
    MONGODB_URI=your_mongodb_uri
    BETTER_AUTH_SECRET=your_secret_key
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

---

## 📜 Available Scripts

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Checks the code for linting errors.

---
````

**Developed with ❤️ by Kawser Ahmed**