import {Entity, IdentitySet, TeamworkBot} from './index';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinition extends Entity, Partial<Parsable> {
    /** The details of the bot specified in the Teams app manifest. */
    bot?: TeamworkBot;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** Verbose description of the application. */
    description?: string;
    /** The name of the app provided by the app developer. */
    displayName?: string;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin. */
    publishingState?: TeamsAppPublishingState;
    /** Short description of the application. */
    shortDescription?: string;
    /** The ID from the Teams app manifest. */
    teamsAppId?: string;
    /** The version number of the application. */
    version?: string;
}
