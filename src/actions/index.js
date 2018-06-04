import { BOOK_SELECTED } from '../const';

export function selectBook (book) {
    console.log('a book has been selected: ', book.title);
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}