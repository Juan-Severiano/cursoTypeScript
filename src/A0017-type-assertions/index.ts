const body = document.querySelector('body');

if (body) {
    body.style.background = 'red';
}

const body2 = document.querySelector('body')!; // Non-Null assertions

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;

// HTML Element
const form = document.querySelector('input') as HTMLInputElement;

