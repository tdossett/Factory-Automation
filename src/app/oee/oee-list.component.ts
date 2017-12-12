import { Component, OnInit }  from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IOee } from './oee';
import { OeeService } from './oee.service';

@Component({
    templateUrl: './oee-list.component.html',
    styleUrls: ['./oee-list.component.css']
})
export class OeeListComponent implements OnInit {
    pageTitle: string = 'Oee List';
    errorMessage: string;
    oees: IOee[];
    selectedOee = 0;
    private sub: any;

    selectForm = new FormGroup({
        selectOee: new FormControl(this.oees)
    });

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _oeeService: OeeService) {}

        ngOnInit(): void {
        /**Initailize Data */
        this._oeeService.getOees()
        .subscribe(oees => this.oees = oees,
        error =>  this.errorMessage = <any>error);
        /** Inbound Params */
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                let name = params['name'];
                this.selectedOee = id;
        });
    }

    onChange(oeeid) {
        console.log(oeeid);
        // Set OEE Filter List
        this.selectedOee = oeeid;
    }
}
