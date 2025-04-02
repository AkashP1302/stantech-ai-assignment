# Table Container Project

This project provides a reusable and customizable table component built with React. It supports dynamic sorting, pagination, search, and API integration.

## 📌 Features

- 🔍 **Search Functionality** - Allows users to search table data dynamically.
- 📊 **Sorting** - Clickable column headers for ascending and descending sorting.
- 🔄 **Pagination** - Supports multiple page size options.
- 🔧 **Custom Renderers** - Allows custom cell rendering.
- ⚡ **API Integration** - Fetch data dynamically from an API using redux thunk.
- 🎨 **Custom Styling** - Easily customizable with CSS.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
  git clone https://github.com/your-repository-name.git
  cd your-repository-name
```

### 2️⃣ Install Dependencies

```sh
  npm install
```

### 3️⃣ Start the Development Server

```sh
  npm start
```

The project will be available at `http://localhost:3000/`.

---

## 🧪 Running Tests

### 1️⃣ Run Jest Tests

```sh
  npm test
```

### 2️⃣ Test File Structure

All test files are located in `__tests__` directory and follow the naming convention `*.test.js`.

---

## 📜 Props for `TableContainer`

| Prop                   | Type     | Description                              |
| ---------------------- | -------- | ---------------------------------------- |
| `columns`              | Array    | Defines column headers and keys          |
| `data`                 | Array    | Initial table data                       |
| `fetchData`            | Function | API function to fetch data               |
| `pageSizeOptions`      | Array    | Available pagination options             |
| `sortByDefaultKey`     | String   | Default column to sort                   |
| `sortDirectionDefault` | String   | Default sort direction ("asc" or "desc") |

---
