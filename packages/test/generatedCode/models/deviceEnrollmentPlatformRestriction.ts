import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentPlatformRestriction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Max OS version supported */
    osMaximumVersion?: string;
    /** Min OS version supported */
    osMinimumVersion?: string;
    /** Block personally owned devices from enrolling */
    personalDeviceEnrollmentBlocked?: boolean;
    /** Block the platform from enrolling */
    platformBlocked?: boolean;
}
