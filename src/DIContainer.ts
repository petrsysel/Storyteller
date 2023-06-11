class Container {
  dependencies: {[name: string]: Dependency};
  instances: {[name: string]: any};
  constructor() {
    this.dependencies = {};
    this.instances = {};
  }

  register(name: string, dependency: Dependency) {
    this.dependencies[name] = dependency;
  }

  resolve<T>(name: string): T{
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
  module: any;
  dependencies: string[];
  constructor(module: any, dependencies:string[] = []) {
    this.module = module;
    this.dependencies = dependencies;
  }
}