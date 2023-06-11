"use strict";
class Container {
    constructor() {
        this.dependencies = {};
        this.instances = {};
    }
    register(name, dependency) {
        this.dependencies[name] = dependency;
    }
    resolve(name) {
        if (this.instances[name]) {
            return this.instances[name];
        }
        if (!this.dependencies[name]) {
            throw new Error(`Dependency '${name}' not registered.`);
        }
        const dependency = this.dependencies[name];
        const resolvedDependencies = dependency.dependencies.map(dep => this.resolve(dep));
        const instance = new dependency.module(...resolvedDependencies);
        this.instances[name] = instance;
        return instance;
    }
}
class Dependency {
    constructor(module, dependencies = []) {
        this.module = module;
        this.dependencies = dependencies;
    }
}
