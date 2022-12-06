import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EBookInstallSummary extends Entity, Partial<Parsable> {
    /** Number of Devices that have failed to install this book. */
    failedDeviceCount?: number;
    /** Number of Users that have 1 or more device that failed to install this book. */
    failedUserCount?: number;
    /** Number of Devices that have successfully installed this book. */
    installedDeviceCount?: number;
    /** Number of Users whose devices have all succeeded to install this book. */
    installedUserCount?: number;
    /** Number of Devices that does not have this book installed. */
    notInstalledDeviceCount?: number;
    /** Number of Users that did not install this book. */
    notInstalledUserCount?: number;
}
