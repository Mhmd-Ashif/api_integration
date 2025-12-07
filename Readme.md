📁 Project Overview

This mini-application fetches data from public APIs, processes it, stores it locally, and displays structured, filterable results through a CLI.

The assignment includes:

Fetching data from two different API endpoints

Caching the results locally

Clean and modular code structure

Error handling for network issues, invalid responses, and timeouts

Filterable list output

Viewing a single item by ID

🏗️ Project Structure
project/
├── src/
│   ├── app.js          # Main CLI application
│   ├── api.js          # Handles API calls (GET endpoints, error handling)
│   └── cache.js        # Local caching and file storage logic
│
├── data/               # Auto-generated folder for cached data
│   └── cache.json      # Created automatically on first run
│
├── .gitignore
├── package.json
└── README.md

🧰 Tech Stack

Node.js

Axios / Native Fetch

JavaScript (CommonJS modules)

Filesystem (fs module for caching)

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/Mhmd-Ashif/api-integration.git
cd api-integration

2️⃣ Install Dependencies
npm install


That's it — no additional configuration is required.

▶️ Running the Project
Run the main application:
node src/app.js

Or via npm:
npm start

📂 Output & Data Storage

All fetched or processed data is stored inside:

/data/cache.json


This file is created automatically if it does not exist.

Stored content includes:

API responses

Parsed and cleaned data

Cached results to avoid repeated API calls

The data/ folder is ignored by Git.

🔍 Features Implemented

✔ Fetch data from two different API endpoints
✔ Local caching using filesystem
✔ List items with filter options
✔ View details of a single item by ID
✔ Fully modular code structure
✔ Error handling for:

Network failure

Invalid response structure

Timeout handling

Missing/malformed fields
