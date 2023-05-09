interface Transaction {
  id: number;
  price: string;
  category: Category;
  notes: string;
  date: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

export type {Transaction, Category};
