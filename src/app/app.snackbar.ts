import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'snack-bar',
    templateUrl: '../dist/app/snack-bar.html',
})
export class AppSnackBar {
    constructor(public snackBar: MdSnackBar) {
        console.log(snackBar);
    }
}