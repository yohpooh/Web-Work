import { Component, NgModule } from '@angular/core';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
    selector: 'app-main',
    imports: [NgxTypedJsModule],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})

export class MainComponent {
doSmth: any;

}
