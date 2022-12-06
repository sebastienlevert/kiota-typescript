import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppOperation extends Entity, Partial<Parsable> {
    /** The operation name. */
    displayName?: string;
    /** The last time the app operation was modified. */
    lastModifiedDateTime?: Date;
    /** The current state of the operation */
    state?: string;
    /** Version of the entity. */
    version?: string;
}
