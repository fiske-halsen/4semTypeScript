interface IBook {
	title: string;
	readonly author: string;
	published?: Date;
	pages?: number;
}

function func(book: IBook) {
	console.log(`${book.title}, ${book.author} , ${book.published}, ${book.pages}`);
}

let book1: IBook = { title: "mybook", author: "Phil", published: new Date(), pages: 22 };
let book2: IBook = { title: "mybook2", author: "Phil" };
//book2.author = "newAuthor" #ReadOnly så kan ikke ændre på værdien
func(book1);
func(book2);

// duck typing er en måde at sammenligne et objekt med et andet ved at
// tjekke om begge objekter har samme type match

class Book {
	constructor(public title: string, public author: string, public published: Date, public pages: number) {}
}
let book3 = new Book("Bog", "bog", new Date(), 124);
func(book3);
