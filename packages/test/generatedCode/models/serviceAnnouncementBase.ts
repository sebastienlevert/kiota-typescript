import {Entity, KeyValuePair} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementBase extends Entity, Partial<Parsable> {
    /** Additional details about service event. This property doesn't support filters. */
    details?: KeyValuePair[];
    /** The end time of the service event. */
    endDateTime?: Date;
    /** The last modified time of the service event. */
    lastModifiedDateTime?: Date;
    /** The start time of the service event. */
    startDateTime?: Date;
    /** The title of the service event. */
    title?: string;
}
