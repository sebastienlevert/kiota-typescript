import {Entity, IdentitySet, TeamsAppIcon, TeamworkBot} from './index';
import {TeamsAppInstallationScopes} from './teamsAppInstallationScopes';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinition extends Entity, Partial<Parsable> {
    /** The allowedInstallationScopes property */
    allowedInstallationScopes?: TeamsAppInstallationScopes;
    /** The WebApplicationInfo.Id from the Teams app manifest. */
    azureADAppId?: string;
    /** The bot property */
    bot?: TeamworkBot;
    /** The colorIcon property */
    colorIcon?: TeamsAppIcon;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** The description property */
    description?: string;
    /** The name of the app provided by the app developer. */
    displayName?: string;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The outlineIcon property */
    outlineIcon?: TeamsAppIcon;
    /** The publishingState property */
    publishingState?: TeamsAppPublishingState;
    /** The shortdescription property */
    shortdescription?: string;
    /** The ID from the Teams app manifest. */
    teamsAppId?: string;
    /** The version number of the application. */
    version?: string;
}
