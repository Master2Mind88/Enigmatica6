events.listen('recipes', (event) => {
    if (!global.isNormalMode) {
        return;
    }

    event.replaceInput(
        { id: 'compactmachines:personal_shrinking_device' },
        'minecraft:book',
        'shrink:shrinking_device'
    );
});
