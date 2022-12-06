import {MobileAppAssignmentSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessAppAssignmentSettings extends MobileAppAssignmentSettings, Partial<Parsable> {
    /** Whether or not to use device execution context for Microsoft Store for Business mobile app. */
    useDeviceContext?: boolean;
}
