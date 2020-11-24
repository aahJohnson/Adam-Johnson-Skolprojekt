"use strict";

function Book(name, subject, pages, isbn) {
    this.name = name;
    this.subject = subject;
    this.pages = pages;
    this.isbn = isbn;
}

function getBookInfo() {
    for (let i = 0; i < books.length; i++) {
        console.log("Book: " + books[i].name + "\nTopic: " + books[i].subject + "\nPages: " + books[i].pages + "\nISBN: " + books[i].isbn);
        console.log("-----");
        }
}

let books = new Array;

books.push(new Book("The Fellowship of the Ring", "Fantasy", "423", "100"));
books.push(new Book("The Two Towers", "Fantasy", "352", "101"));
books.push(new Book("The Return of the King", "Fantasy", "416", "102"));

let on = true;
while (on == true) {
    let menuChoice = prompt("MENU" + "\n1. Add books" + "\n2. Print all books" + "\n3. Close");

    if (menuChoice == 1) {
        let amount = prompt("Number of books to add: ");
        for (let i = 0; i < amount; i++) {
            console.log("Book number " + (i+1) + " being added");
            let newName = prompt("Name of the book: ");
            let newSubject = prompt("Subject: ");
            let newPages = prompt("Number of pages: ");
            let newIsbn = prompt("ISBN number: ");
            books.push(new Book(newName, newSubject, newPages, newIsbn));
        }
    }

    else if (menuChoice == 2) {
        getBookInfo();
    }

    else if (menuChoice == 3) {
        console.log("Shutting off");
        on = false;
    }

    else {
        console.log("Error, try again");
    }
}