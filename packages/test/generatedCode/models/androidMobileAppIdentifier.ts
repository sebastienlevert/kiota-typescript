import {MobileAppIdentifier} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidMobileAppIdentifier extends MobileAppIdentifier, Partial<Parsable> {
    /** The identifier for an app, as specified in the play store. */
    packageId?: string;
}
