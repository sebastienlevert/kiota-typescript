import {DetectedAppPlatformType} from './detectedAppPlatformType';
import {Entity, ManagedDevice} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DetectedApp extends Entity, Partial<Parsable> {
    /** The number of devices that have installed this application */
    deviceCount?: number;
    /** Name of the discovered application. Read-only */
    displayName?: string;
    /** The devices that have the discovered application installed */
    managedDevices?: ManagedDevice[];
    /** Indicates the operating system / platform of the discovered application.  Some possible values are Windows, iOS, macOS. The default value is unknown (0). */
    platform?: DetectedAppPlatformType;
    /** Indicates the publisher of the discovered application. For example: 'Microsoft'.  The default value is an empty string. */
    publisher?: string;
    /** Discovered application size in bytes. Read-only */
    sizeInByte?: number;
    /** Version of the discovered application. Read-only */
    version?: string;
}
