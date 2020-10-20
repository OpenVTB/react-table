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
