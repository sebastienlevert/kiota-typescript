import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionDeviceRegistration extends Entity, Partial<Parsable> {
    /** Device Mac address. */
    deviceMacAddress?: string;
    /** Device name. */
    deviceName?: string;
    /** Device identifier for this device registration record. */
    deviceRegistrationId?: string;
    /** Device type, for example, Windows laptop VS Windows phone. */
    deviceType?: string;
    /** Last checkin time of the device. */
    lastCheckInDateTime?: Date;
    /** UserId associated with this device registration record. */
    userId?: string;
}
