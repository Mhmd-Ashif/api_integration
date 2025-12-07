
## 📁 Project Overview

The goal of this project is to integrate with the provided API(s), process the returned data, and generate meaningful output as required in the assignment PDF.

The assignment involves:

* Fetching data from the given API
* Handling responses, errors, and edge cases
* Storing the retrieved data locally
* Structuring code cleanly using modern JavaScript
* Displaying/outputting the final processed result

---

## 🏗️ Project Structure

```
project/
├── src/
│   ├── app.js          # Main script
│   └── api.js          # api used for calls
│   └── cache.js        # does the caching parts 
│
├── data/                 # auto generated local folder for storing files (ignored by Git)
│   └── (auto-generated files)
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🧰 Tech Stack

* **Node.js**
* **Axios / Native fetch()**
* **JavaScript (ES Modules)**
* **File System (fs module)**

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Mhmd-Ashif/api_integration.git
cd api_integration
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Running the Project

### Run the main script:

```bash
node src/app.js
```

### Or using package scripts:

```bash
npm start
```

---

## 📂 Output Files

All generated or downloaded data from the API will be stored inside:

```
/data/

```

This includes:

* API responses
* Processed results
* Any additional files created during execution

---

## 📌 Notes for the Review Team

* The project has been kept **clean, documented, and modular**.
* API logic is inside `src/`.
* Output files are stored in `/data/`.
* No sensitive keys or credentials were used.
* The repository is set to **public** so it is accessible without permission issues.

If anything needs clarification, please feel free to reach out.

---
