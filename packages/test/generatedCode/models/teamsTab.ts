import {Entity, TeamsApp, TeamsTabConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTab extends Entity, Partial<Parsable> {
    /** Container for custom settings applied to a tab. The tab is considered configured only once this property is set. */
    configuration?: TeamsTabConfiguration;
    /** Name of the tab. */
    displayName?: string;
    /** The application that is linked to the tab. This cannot be changed after tab creation. */
    teamsApp?: TeamsApp;
    /** Deep link URL of the tab instance. Read only. */
    webUrl?: string;
}
