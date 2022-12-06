import {DeviceActionResult} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeleteUserFromSharedAppleDeviceActionResult extends DeviceActionResult, Partial<Parsable> {
    /** User principal name of the user to be deleted */
    userPrincipalName?: string;
}
