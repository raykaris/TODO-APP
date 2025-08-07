### TODO App

This is a **real‑time to‑do application** that runs on **iOS, Android, and the web**—all with **React Native + Expo**, and **Convex**.

---

## Home Screens

![Dark Mode](/assets/images/DarkMode.jpeg)
![Light Mode](/assets/images/LightMode.jpeg)

## Setting Screen

![Settings](/assets/images/settings-1.jpeg)
![Settings](/assets/images/settings-2.jpeg)

## 🧑‍🍳 App Features Overview

- 📝 **Todos Tab**

  - ➕ Add new tasks
  - ✅ Mark as completed / uncompleted
  - 📝 Edit existing tasks
  - 🗑️ Delete tasks
  - 📊 Live **progress bar** at the top

- ⚙️ **Settings Tab**

  - 📈 View task stats (total, completed, remaining)
  - 🌙 Toggle **Dark Mode** (actually works!)
  - 🔔 Notification toggle (UI only)
  - 🔄 Auto-sync toggle (UI only)
  - 🚨 **Danger Zone** to delete everything

- 🔄 **Real-Time Sync**
  - All updates reflect **instantly** across devices
  - Powered by **Convex** database

---

## Tech Stack

- React Native
- Expo
- Convex DB


---

## 📁 .env Setup

Create a `.env` file in the project root:

```env
CONVEX_DEPLOYMENT=<get_it_from_convex>
EXPO_PUBLIC_CONVEX_URL=<get_it_from_convex>
```

## Run the app

```bash
npm install
npx expo
```

## Run the Convex db

- Open a seperate terminal and run;

```bash
npx convex dev
```
