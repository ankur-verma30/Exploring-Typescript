//In TS, Index properties offers a way to create objects that can hold a dynamic set of properties where the property names aren't known beforehand.

interface Product {
  id: number;
  name: string;
  [prop: string]: string | number; //the name of the index property can be anything and it can be of any type and the value can be of any type
}

const product1: Product = {
  id: 1,
  name: "T-Shirt",
  color: "Red",
  price: 123,
};

const product2: Product = {
  id: 2,
  name: "Shirt",
  material: "Ceramic",
  price: 123,
  capacity: 300,
};

interface Settings {
  [props: string]: boolean | string | number;
}

const mySettings: Settings = {
  darkMode: true,
  fontSize: 16,
  customTheme: "Green",
};

interface Demo {
  name: string;
  [props: string]: any;
}

const users: Demo[] = [
  { name: "John", gender: "Male" },
  { name: "Mark", nationality: "English" },
  { name: "Isha", hobby: "Reading books" },
];
