import {DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Endpoint extends DirectoryObject, Partial<Parsable> {
    /** Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.) Not nullable. Read-only. */
    capability?: string;
    /** Application id of the publishing underlying service. Not nullable. Read-only. */
    providerId?: string;
    /** Name of the publishing underlying service. Read-only. */
    providerName?: string;
    /** For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only. */
    providerResourceId?: string;
    /** URL of the published resource. Not nullable. Read-only. */
    uri?: string;
}
