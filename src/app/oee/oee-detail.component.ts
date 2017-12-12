import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IOee } from './oee';
import { OeeService } from './oee.service';

@Component({
    templateUrl: './oee-detail.component.html'
})
export class OeeDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Machine Detail';
    oee: IOee;
    errorMessage: string;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _oeeService: OeeService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getOee(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getOee(id: number) {
        this._oeeService.getOee(id).subscribe(
            oee => this.oee = oee,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/oee']);
    }

}
