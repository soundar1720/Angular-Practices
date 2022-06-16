import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostDirective } from './host.directive';
import { HelloComponent, HiiComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';
  @ViewChild(HostDirective) childref: HostDirective;

  components = [HiiComponent, HelloComponent];

  constructor(private factoryresolver: ComponentFactoryResolver) {}

  load(id) {
    this.childref.viewref.clear();
    const resolvedfactory = this.factoryresolver.resolveComponentFactory(
      this.components[id]
    );
    const compref = this.childref.viewref.createComponent(resolvedfactory);
    compref.instance.name = id == 0?'soundar':'guna';
  }
}
