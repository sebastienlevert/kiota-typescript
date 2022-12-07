import {Entity} from './index';
import {UsageRightState} from './usageRightState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UsageRight extends Entity, Partial<Parsable> {
    /** Product id corresponding to the usage right. */
    catalogId?: string;
    /** Identifier of the service corresponding to the usage right. */
    serviceIdentifier?: string;
    /** The state property */
    state?: UsageRightState;
}
