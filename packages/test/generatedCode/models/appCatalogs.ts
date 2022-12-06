import {Entity, TeamsApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppCatalogs extends Entity, Partial<Parsable> {
    /** The teamsApps property */
    teamsApps?: TeamsApp[];
}
