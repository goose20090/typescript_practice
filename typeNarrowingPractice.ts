/* eslint-disable @typescript-eslint/no-unused-vars */
// Without changing the input or return types of the functions, fix all of the TypeScript errors with type narrowing
// If the input is an invalid type, feel free to throw an error in your function.
function doubleIfNumber(input: unknown) {
  if (typeof input === "number") {
    return input * 2;
  }
}

function combineValues(input1: unknown, input2: unknown): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + input2;
  }
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  throw new Error("Invalid input");
}

function appendToArray(list: unknown, input: unknown): string[] {
  if (Array.isArray(list)) {
    return list.concat(String(input));
  }
  return [];
}

function sumArray(list: unknown) {
  if (!Array.isArray(list)) throw new Error("list is not an array");
  for (let item in list) {
    if (typeof item !== "number") throw new Error("non-number in list");
  }
  const output: number = list.reduce((accumulator: number, item: number) => {
    return accumulator + item;
  }, 0);

  return output;
}

// The type of "sum" should not be "any"
const sum = sumArray([1, 2, 3]);

interface Fruit {
  name: string;
  color?: string;
  eat?: () => void;
}
function shoutFruitName(fruit: object | Fruit) {
  if ("name" in fruit) {
    console.log(fruit.name.toUpperCase());
  }
}

function shoutFruitColor(fruit: Fruit) {
  console.log(fruit.color?.toUpperCase());
}

function eatFruit(fruit: Fruit) {
  fruit.eat?.();
}
