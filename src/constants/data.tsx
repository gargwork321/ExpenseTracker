import {Category, Transaction} from '../model/transactionType';

const categories: Category[] = [
  {
    id: 1,
    image: require('../../assets/images/call-center.png'),
    name: 'Service',
    bgColor: '#F6AFB0',
  },
  {
    id: 2,
    image: require('../../assets/images/lightning.png'),
    name: 'Electricity',
    bgColor: '#8ECC81',
  },
  {
    id: 3,
    image: require('../../assets/images/mortarboard.png'),
    name: 'Education',
    bgColor: '#F6AFB0',
  },
  {
    id: 4,
    image: require('../../assets/images/burger.png'),
    name: 'Food',
    bgColor: '#8ECC81',
  },
  {
    id: 5,
    image: require('../../assets/images/taxi.png'),
    name: 'Transport',
    bgColor: '#80CEEE',
  },
  {
    id: 6,
    image: require('../../assets/images/groccery.png'),
    name: 'Groccery',
    bgColor: '#A88FB0',
  },
  {
    id: 7,
    image: require('../../assets/images/shopping.png'),
    name: 'Shopping',
    bgColor: '#079FB0',
  },

  {
    id: 8,
    image: require('../../assets/images/wages.png'),
    name: 'Salary',
    bgColor: '#80CEEE',
  },
  {
    id: 9,
    image: require('../../assets/images/bank.png'),
    name: 'Bank',
    bgColor: '#A88FB0',
  },
  {
    id: 10,
    image: require('../../assets/images/money.png'),
    name: 'Cash',
    bgColor: '#F6AFB0',
  },
];

const transactions: Transaction[] = [
  {
    id: 1,
    price: '₹ 149.00',
    notes: 'Lorem Ipsum is simply dummy text',
    category: {
      id: 7,
      image: require('../../assets/images/shopping.png'),
      name: 'Shopping',
      bgColor: '#079FB0',
    },
    date: '12 Dec, 2022',
  },
  {
    id: 2,
    price: '₹ 350.00',
    notes: 'Lorem Ipsum is simply dummy text',
    date: '26 Apr, 2023',
    category: {
      id: 6,
      image: require('../../assets/images/groccery.png'),
      name: 'Groccery',
      bgColor: '#A88FB0',
    },
  },
  {
    id: 3,
    price: '₹ 275.00',
    category: {
      id: 4,
      image: require('../../assets/images/burger.png'),
      name: 'Food',
      bgColor: '#8ECC81',
    },
    notes: 'Lorem Ipsum is simply dummy text',
    date: '17 Feb, 2023',
  },
  {
    id: 4,
    price: '₹ 1225.00',
    category: {
      id: 3,
      image: require('../../assets/images/mortarboard.png'),
      name: 'Education',
      bgColor: '#F6AFB0',
    },
    notes: 'Lorem Ipsum is simply dummy text',
    date: '4 Jan, 2023',
  },
  {
    id: 5,
    price: '₹ 775.00',
    category: {
      id: 5,
      image: require('../../assets/images/taxi.png'),
      name: 'Transport',
      bgColor: '#80CEEE',
    },
    notes: 'Lorem Ipsum is simply dummy text',
    date: '22 Mar, 2023',
  },
];

const earnings: Transaction[] = [
  {
    id: 1,
    price: '₹ 4300.00',
    category: {
      id: 10,
      image: require('../../assets/images/money.png'),
      name: 'Cash',
      bgColor: '#F6AFB0',
    },
    notes: 'Lorem Ipsum is simply dummy text',
    date: '22 Mar, 2023',
  },
  {
    id: 2,
    price: '₹ 3500.00',
    category: {
      id: 8,
      image: require('../../assets/images/wages.png'),
      name: 'Salary',
      bgColor: '#80CEEE',
    },
    notes: 'Lorem Ipsum is simply dummy text',
    date: '22 Mar, 2023',
  },
  {
    id: 3,
    price: '₹ 4500.00',
    category: {
      id: 10,
      image: require('../../assets/images/money.png'),
      name: 'Cash',
      bgColor: '#F6AFB0',
    },
    notes: 'Lorem Ipsum is simply dummy text',
    date: '22 Mar, 2023',
  },
  {
    id: 4,
    price: '₹ 4500.00',
    category: {
      id: 9,
      image: require('../../assets/images/bank.png'),
      name: 'Bank',
      bgColor: '#A88FB0',
    },
    notes: 'Lorem Ipsum is simply dummy text',
    date: '22 Mar, 2023',
  },
];

export {categories, transactions, earnings};
