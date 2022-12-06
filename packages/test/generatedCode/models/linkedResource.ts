import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LinkedResource extends Entity, Partial<Parsable> {
    /** Field indicating the app name of the source that is sending the linkedResource. */
    applicationName?: string;
    /** Field indicating the title of the linkedResource. */
    displayName?: string;
    /** Id of the object that is associated with this task on the third-party/partner system. */
    externalId?: string;
    /** Deep link to the linkedResource. */
    webUrl?: string;
}
