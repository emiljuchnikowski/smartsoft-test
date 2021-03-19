import {Config} from "@smartsoft-test/shared/models";

export abstract class IConfigService {
    abstract get(): Promise<Config>;
}