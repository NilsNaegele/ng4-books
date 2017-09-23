import { Injectable } from '@angular/core';

export class Technology {
  constructor(public name: string, public state = 'inactive') { }
    toggleState() {
      this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}

const ALL_TECHNOLOGIES = [
    'JavaScript',
    'AngularJS',
    'Angular 2',
    'Angular 4',
    'Angular 5',
    'Angular Material',
    'AngularFire',
    'NodeJS',
    'V8',
    'Firebase',
    'Google Cloud'
].map(name => new Technology(name));

@Injectable()
export class AnimationsService {

  technologies: Technology[] = [];

  canAdd() {
    return this.technologies.length < ALL_TECHNOLOGIES.length;
  }

  canRemove() {
    return this.technologies.length > 0;
  }

  addActive(active = true) {
    const technology = ALL_TECHNOLOGIES[this.technologies.length];
    technology.state = active ? 'active' : 'inactive';
    this.technologies.push(technology);
  }

  addInactive() {
    this.addActive(false);
  }

  remove() {
    this.technologies.length -= 1;
  }

  clear() {
    this.technologies = [];
  }

}
