import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatus extends Entity, Partial<Parsable> {
    /** Friendly name of the status report. */
    displayName?: string;
    /** Version of the entity. */
    version?: string;
}
