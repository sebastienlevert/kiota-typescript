import {MobileApp} from './index';
import {ManagedAppAvailability} from './managedAppAvailability';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedApp extends MobileApp, Partial<Parsable> {
    /** A managed (MAM) application's availability. */
    appAvailability?: ManagedAppAvailability;
    /** The Application's version. */
    version?: string;
}
