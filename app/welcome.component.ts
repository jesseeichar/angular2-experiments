import {Component} from 'angular2/core';

@Component({
  template: `
    <h2>Welcome</h2>
    <p>This project is a test bed for angular2 features and Material Design.</p>

    <p>Originally I tried to make it a useful project with a theme being a project tool.  One would be able to browse
    projects on disk with the Projects, another component would be to manage the todos (task list) and finally there would be
    a component for taking notes.</p>

    <p>However it became obvious that not all parts of angular2 would be encountered during the development of these components.
    So the <em>Miscellaneous</em> was added for playing with the various APIs.</p>
  `
})
export class WelcomeAppComponent {
}