import {Entity} from './index';
import {InstallState} from './installState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceInstallState extends Entity, Partial<Parsable> {
    /** Device Id. */
    deviceId?: string;
    /** Device name. */
    deviceName?: string;
    /** The error code for install failures. */
    errorCode?: string;
    /** Possible values for install state. */
    installState?: InstallState;
    /** Last sync date and time. */
    lastSyncDateTime?: Date;
    /** OS Description. */
    osDescription?: string;
    /** OS Version. */
    osVersion?: string;
    /** Device User Name. */
    userName?: string;
}
