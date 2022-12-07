import {Entity, TeamsApp, TeamsAppDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallation extends Entity, Partial<Parsable> {
    /** The teamsApp property */
    teamsApp?: TeamsApp;
    /** The teamsAppDefinition property */
    teamsAppDefinition?: TeamsAppDefinition;
}
