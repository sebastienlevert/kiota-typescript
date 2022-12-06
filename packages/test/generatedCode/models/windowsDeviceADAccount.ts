import {WindowsDeviceAccount} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDeviceADAccount extends Partial<Parsable>, WindowsDeviceAccount {
    /** Not yet documented */
    domainName?: string;
    /** Not yet documented */
    userName?: string;
}
