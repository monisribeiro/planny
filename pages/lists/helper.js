const lists = [{
    name: 'Groceries',
    type: 'list',
    items: [{
        name: 'Fruits'
    }, {
        name: 'Vegetables'
    }, {
        name: 'Eggs'
    }, {
        name: 'Chicken'
    }, {
        name: 'Salmon'
    }, {
        name: 'Milk'
    }, {
        name: 'Orange Juice'
    }]
}, {
    name: 'Chores',
    type: 'todo',
    items: [{
        checked: false,
        name: 'Wash the dishes'
    }, {
        checked: false,
        name: 'Clean the bathroom'
    }, {
        checked: false,
        name: 'Do the laundry'
    }, {
        checked: false,
        name: 'Walk the dog'
    }, {
        checked: false,
        name: 'Take out the trash'
    }]
}, {
    name: 'Shopping',
    type: 'todo',
    items: [{
        checked: false,
        name: 'New clothes'
    }, {
        checked: false,
        name: 'Shoes'
    }, {
        checked: false,
        name: 'Hand bags'
    }, {
        checked: false,
        name: 'Make up'
    }, {
        checked: false,
        name: 'Gift for mom'
    }]
}]

export default lists;
