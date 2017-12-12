import {  PipeTransform, Pipe } from '@angular/core';
import { IOee } from './oee';

@Pipe({
    name: 'oeeFilter'
})
export class OeeFilterPipe implements PipeTransform {
    transform(value: IOee[], filter: number): IOee[] {
        if (value==null) {
            return null;
        }

        filter = filter ? filter : null;
        return filter ? value.filter((oee: IOee) =>
            oee.oeeid === filter) : value;
    }
}