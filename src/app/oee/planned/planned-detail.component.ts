import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IPlanned } from './planned';
import { PlannedService } from './planned.service';

@Component({
    templateUrl: './planned-detail.component.html'
})
export class PLannedDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Planned Detail';
    planned: IPlanned;
    errorMessage: string;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _plannedService: PlannedService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                let name = params['name'];
                this.getPlanned(id);
                this.pageTitle = name;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPlanned(id: number) {
        this._plannedService.getPlanned(id).subscribe(
            planned => this.planned = planned,
            error => this.errorMessage = <any>error);
    }

    onBack(id: number, name: string): void {
        this.router.navigate(['/oee', id, name]);
    }

}
