import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {exhaustMap, tap} from 'rxjs/operators';
import {interval} from 'rxjs';

@Component({
  encapsulation: ViewEncapsulation.None,
  template: `
    <small>Element ready!</small>
  `,
  styles: [`
    .panel {
      background-color: darkslategrey;
      color: white;
    }
  `]
})
export class MaterialSnackbarComponent {

  @Input()
  public message: string;

  @Input()
  public actionLabel: string;

  public config: MatSnackBarConfig = {verticalPosition: 'top', horizontalPosition: 'center', announcementMessage: '', panelClass: 'panel'};

  @Output()
  public closed = new EventEmitter<string>();

  constructor(private matSnackBar: MatSnackBar) {
    let id;
    interval(5000)
      .pipe(
        tap(() => id = (Math.random() * 100).toFixed()),
        exhaustMap(_ => {
          return this.matSnackBar.open(`${this.message} - (id: ${id})`, this.actionLabel, this.config).afterDismissed();
        }),
      )
      .subscribe({next: () => this.closed.emit(id)});
  }
}
