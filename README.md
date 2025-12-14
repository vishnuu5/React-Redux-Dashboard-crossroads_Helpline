# React Redux Dashboard

A modern, responsive user management dashboard built with React, Redux Toolkit, and Tailwind CSS. This application demonstrates full CRUD operations with data fetched from JSONPlaceholder API.

## Features

- **Full CRUD Operations**: Create, Read, Update, and Delete users
- **Redux Toolkit State Management**: Centralized state with async thunks
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean interface with Tailwind CSS
- **API Integration**: Fetches data from JSONPlaceholder API
- **Form Validation**: Client-side validation for user inputs
- **Loading States**: Visual feedback during async operations
- **Error Handling**: Graceful error messages and recovery

## Tech Stack

- **React 18.3** - UI library
- **Redux Toolkit 2.2** - State management
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JSONPlaceholder** - Mock REST API

## Deplyoment URL

[View Demo](https://react-redux-dashboard-crossroads-he.vercel.app)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vishnuu5/React-Redux-Dashboard-crossroads_Helpline.git
cd react-redux-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

## API Reference

This application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as the mock REST API.

### Endpoints Used

- `GET /users` - Fetch all users
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

**Note**: JSONPlaceholder is a fake API. POST, PUT, and DELETE requests are simulated and won't persist data on the server. The application maintains local state in Redux to simulate persistence.

## CRUD Operations

### Create

Click "Add User" button, fill the form, and submit. New users are added to the local Redux state.

### Read

Users are automatically fetched from the API when the dashboard loads. Click "Refresh" to reload data.

### Update

Click the edit icon on any user row, modify the form, and submit. Changes are reflected in Redux state.

### Delete

Click the delete icon on any user row, confirm the action in the dialog. User is removed from Redux state.

## Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile** (< 768px): Card-based layout
- **Tablet** (768px - 1024px): Optimized table view
- **Desktop** (> 1024px): Full table with all columns

## License

MIT
