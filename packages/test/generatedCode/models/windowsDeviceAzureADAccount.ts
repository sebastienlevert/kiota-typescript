import {WindowsDeviceAccount} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDeviceAzureADAccount extends Partial<Parsable>, WindowsDeviceAccount {
    /** Not yet documented */
    userPrincipalName?: string;
}
