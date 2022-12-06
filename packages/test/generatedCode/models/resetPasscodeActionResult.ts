import {DeviceActionResult} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResetPasscodeActionResult extends DeviceActionResult, Partial<Parsable> {
    /** Newly generated passcode for the device */
    passcode?: string;
}
