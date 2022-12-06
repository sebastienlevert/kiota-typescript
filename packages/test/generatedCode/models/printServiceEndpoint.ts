import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpoint extends Entity, Partial<Parsable> {
    /** A human-readable display name for the endpoint. */
    displayName?: string;
    /** The URI that can be used to access the service. */
    uri?: string;
}
