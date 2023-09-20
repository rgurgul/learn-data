import { Component } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  template: `
    <div>
      <div *ngFor="let item of data$|async">
        {{item|json}}
      </div>
    </div>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersService: EntityCollectionService<any>;
  data$!: Observable<any[]>;

  constructor(
    entityServiceFactory: EntityCollectionServiceFactory
  ) {
    this.usersService = entityServiceFactory.create('User');
  }

  ngOnInit(): void {
    this.data$ = this.usersService.entities$;
    this.usersService.getAll();
  }
}
