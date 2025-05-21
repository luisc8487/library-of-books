# Library Of Books

Welcome to **Library of Books**!  
This is a simple web application where you can keep track of books you want to read. You can add new books, update their titles, remove books, and see your reading list—all right in your browser.

[![library-book](https://github.com/user-attachments/assets/9290f174-ec58-4a9d-b156-953bc779045c)
](https://vimeo.com/1085475137?share=copy)

## Using JSON Server as a Fake Backend

For this project, I used a tool called **JSON Server** to create a "fake backend." Think of JSON Server as a simple robot librarian: it keeps track of a list of books (or any data you want) and lets you add, view, update, or remove books—just like a real database, but much easier to set up for learning and testing.

### Why Use JSON Server?

When building web apps, you usually need a backend—a place where your data lives. Setting up a real backend can be complicated, so JSON Server helps by pretending to be one. It stores your data in a file called `db.json` and lets you interact with it using standard web requests.

### Setting Up JSON Server

1. **Install JSON Server**  
   In your project folder, open the terminal and run:

   ```sh
   npm install json-server@0
   ```

   This installs JSON Server so you can use it in your project.

2. **Install Axios**  
   Axios is a tool that helps your app talk to the backend. Install it with:

   ```sh
   npm install axios
   ```

   This lets your app send and receive data (like adding or deleting books).

3. **Add a Server Script**  
   In your `package.json` file, under the `"scripts"` section, add:

   ```json
   "server": "json-server -p 3001 --watch db.json --host 127.0.0.1"
   ```

   This command tells JSON Server to watch your `db.json` file for changes and run on your computer at address `127.0.0.1` (which just means "my own computer") on port `3001`.

4. **Start the Fake Backend**  
   In the terminal, run:
   ```sh
   npm run server
   ```
   Now, your fake backend is running! You can visit [http://localhost:3001/books](http://localhost:3001/books) in your browser to see your list of books.

### Using REST Client for Testing

You can create a file called `api.http` in your project. This file lets you write and run requests to your fake backend, like asking for all books, adding a new one, or deleting one. It’s like writing little notes to your robot librarian.

**Example `api.http`:**

```http
### Get all books
GET http://localhost:3001/books

### Add a new book
POST http://localhost:3001/books
Content-Type: application/json

{
  "title": "The Great Gatsby"
}

### Delete a book (replace 1 with the book's id)
DELETE http://localhost:3001/books/1
```

### How Does This Help?

- **CRUD Operations:**  
  CRUD stands for Create, Read, Update, Delete—the four basic things you do with data. JSON Server lets you do all of these easily.
- **Analogy:**  
  Imagine your app is a library visitor, JSON Server is the librarian, and `db.json` is the library’s book list. You can ask the librarian to show you all books, add a new book, update a book’s info, or remove a book from the list.

## Application on the Client Side

### What Can You Do?

- **Add a Book:** Type in a book title and click "Create" to add it to your list.
- **Edit a Book:** Click the ✎ (Edit) button next to a book to change its title.
- **Delete a Book:** Click the "Delete" button to remove a book from your list.
- **View Books:** All your books are shown in a list, each with a title and a sample image.

### How Does It Work?

- When you add a book, it appears instantly in your list.
- If you edit a book's title, the list updates right away.
- If you delete a book, it disappears from the list.
- All changes happen on the page without needing to reload.

### What Does It Look Like?

Each book in your list looks like this:

- The image is a random picture from [Lorem Picsum](https://picsum.photos/).
- The title is what you entered.
- The ✎ Edit button lets you change the title.
- The Delete button removes the book.

### Example

1. **Adding a Book:**  
   Type "Harry Potter" in the input box and click "Create".  
   "Harry Potter" will appear in your reading list.

2. **Editing a Book:**  
   Click the ✎ Edit button next to "Harry Potter".  
   Change the title to "Harry Potter and the Sorcerer's Stone" and click "Save".

3. **Deleting a Book:**  
   Click the "Delete" button next to any book to remove it from your list.

## Technologies Used

- **ReactJS:** For building the interactive user interface.
- **CSS:** For styling the app and making it look nice.
- **Lorem Picsum:** For showing sample images for each book.

## Summary

- **JSON Server** gives you a quick, easy backend for learning and testing.
- **Axios** helps your app talk to the backend.
- **REST Client** and `api.http` let you test your backend with simple requests.
- All your data lives in `db.json`, which you can open and edit like a regular file.

This setup is perfect for learning how web apps work with data, without needing to set up a real database or server!
