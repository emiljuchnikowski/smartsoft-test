import {Injectable} from "@angular/core";
import {CrudFacade} from "@smartsoft001/crud-shell-angular";

import {Config} from "@smartsoft-test/shared/models";

@Injectable()
export class ConfigsFacade extends CrudFacade<Config> {

}