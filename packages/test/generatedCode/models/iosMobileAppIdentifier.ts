import {MobileAppIdentifier} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosMobileAppIdentifier extends MobileAppIdentifier, Partial<Parsable> {
    /** The identifier for an app, as specified in the app store. */
    bundleId?: string;
}
