import {DeviceActionResult} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteLockActionResult extends DeviceActionResult, Partial<Parsable> {
    /** Pin to unlock the client */
    unlockPin?: string;
}
