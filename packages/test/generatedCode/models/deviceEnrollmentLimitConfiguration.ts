import {DeviceEnrollmentConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration, Partial<Parsable> {
    /** The maximum number of devices that a user can enroll */
    limit?: number;
}
