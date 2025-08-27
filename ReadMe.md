````markdown
# Gemini AI API

Express backend for **Google Gemini API**.  
Supports input from **text, image, document, and audio**.

## Setup
```bash
git clone <git@github.com:JhorgiHisamawa/gemini-flash-api.git>
cd project
npm install
````

Create `.env` file:

```env
GEMINI_API_KEY=<your_gemini_api_key>
PORT=<port>
```

Run the server:

```bash
npm run dev   # development (nodemon)
npm start     # production
```

Base URL:

```
http://localhost:<port>/api/ai
```

## Endpoints

* `POST /generate-text` → JSON body `{ "prompt": "..." }`
* `POST /generate-from-image` → FormData: `image` (file), `prompt` (text)
* `POST /generate-from-document` → FormData: `document` (file), `prompt` (optional)
* `POST /generate-from-audio` → FormData: `audio` (file), `prompt` (optional)

### Postman

1. Open Postman.
2. Import the collection file located at `./documentation/postman_collection.json`.
3. Set the environment variable:
```
{{base_url}} = http://localhost:<port>/api/ai
```

