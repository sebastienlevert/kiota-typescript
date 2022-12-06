import {DeviceInstallState, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserInstallStateSummary extends Entity, Partial<Parsable> {
    /** The install state of the eBook. */
    deviceStates?: DeviceInstallState[];
    /** Failed Device Count. */
    failedDeviceCount?: number;
    /** Installed Device Count. */
    installedDeviceCount?: number;
    /** Not installed device count. */
    notInstalledDeviceCount?: number;
    /** User name. */
    userName?: string;
}
