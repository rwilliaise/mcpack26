ServerEvents.recipes(event => {
    const modsToWipe = [
        'create',
        'createaddition',
        'vs_clockwork',
        'trackwork',
        'createdieselgenerators',
    ];

    modsToWipe.forEach(modId => {
        event.remove({ mod: modId });
    });

    const typesToWipe = [
        'create:mixing',
        'create:compacting',
        'create:pressing',
        'create:milling',
        'create:crushing',
        'create:cutting',
        'create:splashing',
        'create:deploying',
        'create:item_application',
        'create:mechanical_crafting',
        'create:sequenced_assembly',
        'create:filling',
        'create:emptying',
        'createaddition:rolling',
        'createaddition:charging'
    ];

    typesToWipe.forEach(type => {
        event.remove({ type: type });
    });
});