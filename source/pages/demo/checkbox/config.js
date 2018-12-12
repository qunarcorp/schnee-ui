const configs = [
    {
        type: 'checked',
        items: [
            { checked: true },
            { checked: false }
        ]
    },
    {
        type: 'disabled',
        items: [
            { checked: true, disabled: true },
            { checked: false, disabled: true }
        ]
    },
    {
        type: 'text',
        items: [
            { text: 'apple' },
            { text: 'orange' },
            { text: 'banana' }
        ]
    },
    {
        type: 'isRight',
        items: [
            { isRight: false, text: 'left' },
            { isRight: true, text: 'right' }
        ]
    },
    {
        type: 'color',
        items: [
            { checked: true, color: 'red' },
            { checked: true, color: 'orange' },
            { checked: true, color: 'blue' }
        ]
    },
    {
        type: 'size',
        items: [
            { checked: true, size: 'small' },
            { checked: true, size: 'default' },
            { checked: true, size: 'large' }
        ]
    }
];

const getValue = value => value !== undefined ? value : undefined;

export {
    getValue,
    configs
};
