import {DeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSCustomConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Payload. (UTF8 encoded byte array) */
    payload?: string;
    /** Payload file name (.mobileconfig */
    payloadFileName?: string;
    /** Name that is displayed to the user. */
    payloadName?: string;
}
