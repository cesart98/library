function Book(title, author, pageCount, hasRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasRead = hasRead;
    if (this.hasRead) {
        readStatus = "has read";
    } else if (!this.hasRead) {
        readStatus = "not read yet";
    }
    this.info = function() {
        console.log(title + ' by ' + author + ', ' + pageCount + ' pages, ' + readStatus)
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
theHobbit.info()