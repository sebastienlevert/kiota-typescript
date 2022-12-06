import {Entity, MobileAppIdentifier} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileApp extends Entity, Partial<Parsable> {
    /** The identifier for an app with it's operating system type. */
    mobileAppIdentifier?: MobileAppIdentifier;
    /** Version of the entity. */
    version?: string;
}
