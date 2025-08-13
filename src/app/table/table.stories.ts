import { Meta, StoryObj } from '@storybook/angular';
import { Table } from './table';
import { TableColumnConfig } from './core/types';

type User = {
  name: string;
  status: 'online' | 'offline' | 'inactive',
  phone: string;
}

const USER_DATA: User[] = [
    { name: 'Guy Mendel', status: 'offline', phone: '053526179',},
    { name: 'Eyal Mendel', status: 'online', phone: '054542648',},
    { name: 'Noga Mendel', status: 'inactive', phone: '054588848', },
];

const TEXT_COLUMNS: TableColumnConfig<User>[] = [
    { type: 'text', label: 'Name', field: 'name', sortable: true },
    { type: 'text', label: 'Phone', field: 'phone' },
]; 

const ICON_COLUMNS: TableColumnConfig<User>[] = [
    { 
        type: 'icon', 
        label: 'Status', 
        field: 'status', 
        rendererConfig: {
            getUrl: (row: User) => row.status === 'online' ? 'icons/online.svg' : 'icons/offline.svg',
            getAltText: (row: User) => row.status.toLowerCase()
        } 
    },
];

const BUTTON_COLUMNS: TableColumnConfig<User>[] = [
    { 
        type: 'button', 
        label: 'Action', 
        field: 'action', 
        rendererConfig: {
            text: 'click me',
            action: (row: User) => console.log(`Action done by: ${row.name}`)
        }
    }
];

const meta: Meta<Table<User>> = {
  title: 'Shared/Table',
  component: Table<User>,
};
export default meta;

type Story = StoryObj<Table<User>>;

const basicArgs = {
    data: USER_DATA,
    columns: [...TEXT_COLUMNS],
    selectable: false,
};

export const TextOnly: Story = {
  args: {
    ...basicArgs,  
  },
};

export const TextAndButtons: Story = {
  args: {
    ...basicArgs, 
    columns: [...TEXT_COLUMNS, ...BUTTON_COLUMNS],
  },
};

export const TextButtonsAndIcons: Story = {
  args: {
    ...basicArgs, 
    columns: [...TEXT_COLUMNS, ...ICON_COLUMNS, ...BUTTON_COLUMNS],
  },
};

export const Selectable: Story = {
  args: {
    ...basicArgs,
    selectable: true
  },
};

export const Sortable: Story = {
    args: {
        ...basicArgs,
    }
}


