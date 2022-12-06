import {EnrollmentConfigurationAssignment, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfiguration extends Entity, Partial<Parsable> {
    /** The list of group assignments for the device configuration profile */
    assignments?: EnrollmentConfigurationAssignment[];
    /** Created date time in UTC of the device enrollment configuration */
    createdDateTime?: Date;
    /** The description of the device enrollment configuration */
    description?: string;
    /** The display name of the device enrollment configuration */
    displayName?: string;
    /** Last modified date time in UTC of the device enrollment configuration */
    lastModifiedDateTime?: Date;
    /** Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value. */
    priority?: number;
    /** The version of the device enrollment configuration */
    version?: number;
}
