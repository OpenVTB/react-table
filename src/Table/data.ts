import { Column } from '../Table';

export type RowData = {
  id: string;
  transfer_type: string;
  transfer_date: Date;
  transfer_amount: number;
  currency: string;
  rate: number;
  state: string;
};

export const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 18_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 32_500_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 18_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 32_500_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 18_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0006',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 32_500_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0007',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 18_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0008',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 32_500_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0009',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 18_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0010',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 32_500_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0011',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 18_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
  {
    id: '0012',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020'),
    transfer_amount: 32_500_000_000,
    currency: 'RUB',
    rate: 2.5,
    state: 'Выполнено',
  },
];

export const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
  },
  {
    name: 'state',
    title: 'Статус',
  },
];
