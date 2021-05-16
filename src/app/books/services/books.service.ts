import { Injectable } from '@angular/core';

export type Book = {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  author: string;
  rate: number;
}

export type SortValues = "Featured" | "Rate high to low" | "Rate low to high";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  public getCategories() {

    const categories: string[] = [];

    this.books
      .forEach((book) => {
        const booksCategories = book.category.split("|");
        booksCategories.forEach((category) => {
          if (categories.find(allCategory => allCategory === category)) {
            return;
          }
          categories.push(category)
        });
      });

    return categories;
  }

  public getBooks(categories: string[], sortBy: SortValues, searchText?: string) {

    let books: Book[];

    if (categories.length > 0) {
      books = this.books.filter((book) => {
        return categories.some(category => book.category.includes(category));
      });
    } else {
      books = [...this.books];
    }

    switch (sortBy) {
      case "Rate high to low":
        books.sort((book1, book2) => {
          return book1.rate > book2.rate ? 1 : -1;
        });
        break;
      case "Rate low to high":
        books.sort((book1, book2) => {
          return book1.rate <= book2.rate ? 1 : -1;
        });
        break;
      default:
        break;
    }

    return books;
  }

  private books: Book[] = [{
    "id": 1,
    "name": "Heat's On, The",
    "description": "Self-enabling well-modulated architecture",
    "category": "Comedy|Musical",
    "image": "http://dummyimage.com/500x500.png/cc0000/ffffff",
    "author": "Gilburt MacKey",
    "rate": 5.6
  }, {
    "id": 2,
    "name": "Caligula",
    "description": "Digitized impactful emulation",
    "category": "Drama",
    "image": "http://dummyimage.com/500x500.png/cc0000/ffffff",
    "author": "Karlotte Mulholland",
    "rate": 4.3
  }, {
    "id": 3,
    "name": "Red Squirrel, The (Ardilla roja, La)",
    "description": "User-centric clear-thinking encryption",
    "category": "Comedy|Drama|Mystery|Romance",
    "image": "http://dummyimage.com/500x500.png/cc0000/ffffff",
    "author": "Maurine Follit",
    "rate": 0.1
  }, {
    "id": 4,
    "name": "Disfigured",
    "description": "Reverse-engineered eco-centric emulation",
    "category": "Drama",
    "image": "http://dummyimage.com/500x500.png/cc0000/ffffff",
    "author": "Blaine Deamer",
    "rate": 6.3
  }, {
    "id": 5,
    "name": "Prowler, The (a.k.a. Rosemary's Killer) (a.k.a. The Graduation)",
    "description": "Front-line motivating function",
    "category": "Horror",
    "image": "http://dummyimage.com/500x500.png/dddddd/000000",
    "author": "Natasha Chase",
    "rate": 8.8
  }, {
    "id": 6,
    "name": "Borrowed Hearts (Borrowed Hearts: A Holiday Romance)",
    "description": "Devolved didactic core",
    "category": "Drama|Fantasy|Romance",
    "image": "http://dummyimage.com/500x500.png/ff4444/ffffff",
    "author": "Goddard O'Growgane",
    "rate": 6.5
  }, {
    "id": 7,
    "name": "Tinker Tailor Soldier Spy",
    "description": "Multi-tiered full-range encoding",
    "category": "Drama|Film-Noir|Thriller",
    "image": "http://dummyimage.com/500x500.png/cc0000/ffffff",
    "author": "Eb Overington",
    "rate": 4.4
  }, {
    "id": 8,
    "name": "Camel Spiders",
    "description": "Team-oriented client-server portal",
    "category": "Horror|Sci-Fi",
    "image": "http://dummyimage.com/500x500.png/dddddd/000000",
    "author": "Sherm Hamblett",
    "rate": 9.0
  }, {
    "id": 9,
    "name": "Shot in the Heart",
    "description": "Networked mobile forecast",
    "category": "Crime|Drama",
    "image": "http://dummyimage.com/500x500.png/ff4444/ffffff",
    "author": "Margret Tidmarsh",
    "rate": 4.1
  }, {
    "id": 10,
    "name": "Born to Defense (Zhong hua ying xiong)",
    "description": "Team-oriented coherent complexity",
    "category": "Action|War",
    "image": "http://dummyimage.com/500x500.png/dddddd/000000",
    "author": "Simeon Largent",
    "rate": 0.3
  }, {
    "id": 11,
    "name": "Passion of Ayn Rand, The",
    "description": "Reduced discrete hardware",
    "category": "Documentary|Drama|Romance",
    "image": "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
    "author": "Bridgette Ricket",
    "rate": 0.4
  }, {
    "id": 12,
    "name": "Enlighten Up!",
    "description": "Synergized clear-thinking intranet",
    "category": "Documentary",
    "image": "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
    "author": "Theresina Ferschke",
    "rate": 4.7
  }, {
    "id": 13,
    "name": "Fearless Hyena, The (Xiao quan guai zhao)",
    "description": "Multi-tiered exuding Graphical User Interface",
    "category": "Action|Comedy",
    "image": "http://dummyimage.com/500x500.png/ff4444/ffffff",
    "author": "Pauly Fateley",
    "rate": 1.4
  }, {
    "id": 14,
    "name": "Borgman",
    "description": "Decentralized intangible migration",
    "category": "Thriller",
    "image": "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
    "author": "Anthony Gonnard",
    "rate": 2.2
  }, {
    "id": 15,
    "name": "Fagbug",
    "description": "Fully-configurable leading edge function",
    "category": "Documentary",
    "image": "http://dummyimage.com/500x500.png/dddddd/000000",
    "author": "Colby Dudeney",
    "rate": 5.4
  }, {
    "id": 16,
    "name": "Snake in the Eagle's Shadow (Se ying diu sau)",
    "description": "Automated leading edge support",
    "category": "Action|Comedy",
    "image": "http://dummyimage.com/500x500.png/ff4444/ffffff",
    "author": "Scot Cardenas",
    "rate": 5.1
  }, {
    "id": 17,
    "name": "Cannibal Women in the Avocado Jungle of Death",
    "description": "Down-sized 6th generation service-desk",
    "category": "Action|Comedy",
    "image": "http://dummyimage.com/500x500.png/cc0000/ffffff",
    "author": "Steffane Hasley",
    "rate": 5.1
  }, {
    "id": 18,
    "name": "Rude Boy",
    "description": "Visionary non-volatile flexibility",
    "category": "Documentary|Drama",
    "image": "http://dummyimage.com/500x500.png/dddddd/000000",
    "author": "Ciro Batrim",
    "rate": 4.6
  }, {
    "id": 19,
    "name": "Sunshine",
    "description": "Profound intangible projection",
    "category": "Adventure|Drama|Sci-Fi|Thriller",
    "image": "http://dummyimage.com/500x500.png/dddddd/000000",
    "author": "Maryanne Allender",
    "rate": 2.1
  }, {
    "id": 20,
    "name": "Last Blitzkrieg, The",
    "description": "Cross-platform reciprocal local area network",
    "category": "Drama|War",
    "image": "http://dummyimage.com/500x500.png/dddddd/000000",
    "author": "Ivor Outerbridge",
    "rate": 6.4
  }]
}
