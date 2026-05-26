# CodeWithSiril — Google Sheets Integration
## Complete Deployment Guide

---

## 📋 WHAT WAS DONE

Two forms were detected and integrated:

| # | Form Name | Location in Site | Fields | Google Sheet Tab |
|---|-----------|-----------------|--------|-----------------|
| 1 | **Initiate Your Project** | "Why Choose Us" section | Name, Email, Interested Service | `Inquiries` |
| 2 | **Contact / Ignite the Project** | Contact section | Full Name, Email, Phone, Project Brief | `Contact` |

Both forms now:
- Submit via `fetch()` — **no page refresh**
- Show a **loading spinner** while submitting
- Show a **green success message** on success
- Show a **red error message** on failure
- **Reset all fields** after successful submission

---

## 🗂️ GOOGLE SHEET COLUMN SETUP

### Tab 1: `Contact`
| Column A | Column B | Column C | Column D | Column E |
|----------|----------|----------|----------|----------|
| Timestamp | Full Name | Email | Phone | Message |

### Tab 2: `Inquiries`
| Column A | Column B | Column C | Column D |
|----------|----------|----------|----------|
| Timestamp | Full Name | Email | Interested Service |

---

## 🚀 STEP-BY-STEP DEPLOYMENT

### STEP 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `CodeWithSiril Form Submissions`
4. You can leave it empty — the script will create the tabs automatically

---

### STEP 2 — Open Google Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. A new Apps Script editor tab will open
3. **Delete all existing code** in the editor (the default `myFunction`)

---

### STEP 3 — Paste the Script

1. Open the file: `google-apps-script/Code.gs` (included in this package)
2. Copy **all** of its contents
3. Paste it into the Apps Script editor
4. Click 💾 **Save** (or press `Ctrl+S` / `Cmd+S`)
5. Name the project: `CodeWithSiril Forms`

---

### STEP 4 — Run Setup (creates sheet tabs with headers)

1. In the Apps Script editor, select the function `setupSheets` from the dropdown
2. Click the ▶️ **Run** button
3. You'll be asked to **authorize** — click "Review permissions" → choose your Google account → click "Allow"
4. You should see a popup: ✅ *"Sheets created successfully!"*
5. Go back to your Google Sheet — you'll see two new tabs: `Contact` and `Inquiries`

---

### STEP 5 — Deploy as Web App

1. In Apps Script, click **Deploy → New deployment**
2. Click the ⚙️ gear icon next to "Select type" → choose **Web app**
3. Fill in the settings:
   - **Description:** `CodeWithSiril Forms v1`
   - **Execute as:** `Me (your email)`
   - **Who has access:** `Anyone` ← **This is critical for the form to work!**
4. Click **Deploy**
5. You'll see a popup with your **Web App URL** — copy it:
   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXXXXX/exec
   ```
   ⚠️ **Keep this URL safe** — anyone with it can submit to your sheet

---

### STEP 6 — Paste the URL into Your React App

Open the file:
```
src/App.tsx
```

Find this line near the top (around line 41):
```typescript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```

Replace it with your actual URL:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXXXXXXXXXXXXX/exec';
```

---

### STEP 7 — Build & Deploy Your React App

```bash
# Install dependencies (if not done yet)
npm install

# Build for production
npm run build

# The built files will be in the /dist folder
# Upload the contents of /dist to your hosting provider
```

---

## 🔄 HOW TO UPDATE THE SCRIPT LATER

If you ever change the script code:
1. Go to **Deploy → Manage deployments**
2. Click the ✏️ edit icon
3. Set **Version** to `New version`
4. Click **Deploy**

> ⚠️ The URL stays the same when you create a new version — no need to update `App.tsx` again.

---

## 🛡️ CORS — HOW IT'S HANDLED

Google Apps Script does not support CORS headers in responses. This is bypassed by:

1. Sending the request with `Content-Type: text/plain` — this avoids browser CORS preflight checks
2. The data is still sent as a JSON string in the request body
3. The Apps Script parses it with `JSON.parse(e.postData.contents)`

**No additional CORS configuration is needed** on either Google's side or your hosting side.

---

## 🧪 TESTING THE FORMS

After deployment:

1. Open your website
2. Fill in the **"Initiate Your Project"** form (Why Choose Us section) → Submit
3. Fill in the **main Contact form** → Submit
4. Open your Google Sheet — you should see rows in both tabs within seconds

### Test the Script directly (optional)
Paste this URL in your browser to confirm it's live:
```
https://script.google.com/macros/s/XXXXXXXXXXXXXXXX/exec
```
You should see: `{"status":"ok","message":"CodeWithSiril Forms API is running."}`

---

## ❓ TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Form submits but nothing appears in sheet | Check that "Who has access" is set to **Anyone** in deployment settings |
| Error message shown on submit | Open browser DevTools → Network tab → check the request for error details |
| "Script function not found" error | Make sure you saved the script and deployed a **new version** |
| Sheet tabs missing | Run `setupSheets` function again from the Apps Script editor |
| URL changed | Re-deploy → Manage deployments → edit → "New version" (URL stays same) |

---

## 📁 FILES CHANGED

```
src/
└── App.tsx          ← Updated (both forms now fully integrated)

google-apps-script/
└── Code.gs          ← NEW (paste this into Google Apps Script)

DEPLOYMENT_GUIDE.md  ← This file
```

**Files NOT changed:** `index.css`, `constants.ts`, `main.tsx`, `vite.config.ts`, `package.json`, all assets.
