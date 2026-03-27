# React Vite Chatbot Setup

Your chatbot project is ready! Follow these steps to get it running:

## 1. Install Dependencies

Navigate to the project directory and install Tailwind CSS:

```bash
cd my-project
npm install -D tailwindcss @tailwindcss/vite
```

## 2. Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## 3. Build for Production

```bash
npm run build
```

## Project Structure

- `src/App.jsx` - Main chatbot component with message handling
- `src/index.css` - Tailwind CSS imports
- `vite.config.js` - Vite configuration with Tailwind plugin
- `index.html` - Entry HTML file

## Features

✨ **Chatbot Features:**
- Real-time message display
- User and bot message differentiation
- Auto-scroll to latest messages
- Loading animation while bot responds
- Responsive design with Tailwind CSS
- Simple keyword-based bot responses

## Customization

You can customize the bot responses by editing the `generateBotResponse` function in `src/App.jsx`. Add more keywords and responses as needed!

## Next Steps

- Integrate with a real API for bot responses
- Add user authentication
- Store chat history in a database
- Add more advanced UI features
