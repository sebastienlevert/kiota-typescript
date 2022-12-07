import {Entity, TeamsApp, TeamsTabConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTab extends Entity, Partial<Parsable> {
    /** The configuration property */
    configuration?: TeamsTabConfiguration;
    /** Name of the tab. */
    displayName?: string;
    /** The messageId property */
    messageId?: string;
    /** Index of the order used for sorting tabs. */
    sortOrderIndex?: string;
    /** The teamsApp property */
    teamsApp?: TeamsApp;
    /** The teamsAppId property */
    teamsAppId?: string;
    /** Deep link URL of the tab instance. Read only. */
    webUrl?: string;
}
