import {CrudService} from "@smartsoft001/crud-shell-angular";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

import {Config} from "@smartsoft-test/shared/models";

@Injectable()
export class ConfigsService extends CrudService<Config> {
    getById(id: string): Observable<Config> {
        return super.getById(id);
    }
}