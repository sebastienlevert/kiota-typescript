import {Entity, TeamsApp, TeamsAppDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallation extends Entity, Partial<Parsable> {
    /** The app that is installed. */
    teamsApp?: TeamsApp;
    /** The details of this version of the app. */
    teamsAppDefinition?: TeamsAppDefinition;
}
