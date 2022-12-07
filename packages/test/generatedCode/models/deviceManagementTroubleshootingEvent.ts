import {DeviceManagementTroubleshootingErrorDetails, Entity, KeyValuePair} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementTroubleshootingEvent extends Entity, Partial<Parsable> {
    /** A set of string key and string value pairs which provides additional information on the Troubleshooting event */
    additionalInformation?: KeyValuePair[];
    /** Id used for tracing the failure in the service. */
    correlationId?: string;
    /** Time when the event occurred . */
    eventDateTime?: Date;
    /** Event Name corresponding to the Troubleshooting Event. It is an Optional field */
    eventName?: string;
    /** Object containing detailed information about the error and its remediation. */
    troubleshootingErrorDetails?: DeviceManagementTroubleshootingErrorDetails;
}
