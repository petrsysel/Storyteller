"use strict";
function OnLoad() {
    const container = new Container();
    container.register('input', new Dependency(Input));
    container.register('output', new Dependency(Output));
    container.register('player', new Dependency(Player));
    container.register('world', new Dependency(World, ['player']));
    container.register('cmdPackage', new Dependency(AllCommandsPackage, ['world', 'output']));
    container.register('cmdResolver', new Dependency(CommandResolver, ['input', 'cmdPackage']));
    const cmdResolver = container.resolve('cmdResolver');
}
