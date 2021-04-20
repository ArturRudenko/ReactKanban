import { v4 as uuidv4 } from "uuid";

export const columns = [
  {
    title: 'Up next',
    alias: 'up_next'
  },
  {
    title: 'Doing',
    alias: 'doing'
  },
  {
    title: 'Done',
    alias: 'done'
  }
]

export const tags = [
  {
    id: uuidv4(),
    title: 'Job',
    color: '#5CB3FF',
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    title: 'Home',
    color: '#5BE5E3',
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    title: 'Helth',
    color: '#3CAF41',
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    title: 'Family',
    color: '#77F9C4',
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    title: 'Hobbie',
    color: '#DAA520',
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
];

export const tasks = [
  {
    id: uuidv4(),
    status: columns[0].alias,
    date: new Date('2016'),
    tags: [tags[2]],
    title: 'Sunt aut facere repellat',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    status: columns[2].alias,
    date: new Date('2015'),
    tags: [tags[1]],
    title: 'Qui est esse quasi',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    status: columns[2].alias,
    date: new Date('2014'),
    tags: [tags[1]],
    title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    status: columns[1].alias,
    date: new Date('2013'),
    tags: [tags[0]],
    title: 'Molestias',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    status: columns[0].alias,
    date: new Date('2012'),
    tags: [tags[0]],
    title: 'Aut facere repellat provident occaecati excepturi optio reprehenderit',
    text: 'Consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    status: columns[1].alias,
    date: new Date('2011'),
    tags: [tags[1],tags[3]],
    title: 'Repellat provident occaecati excepturi optio reprehenderit',
    text: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    status: columns[2].alias,
    date: new Date('2010'),
    tags: [tags[2], tags[4]],
    title: 'Optio reprehenderit',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
  },
];
