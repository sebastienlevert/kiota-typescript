import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppInstallTimeSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The time at which the app should be installed. */
    deadlineDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** The time at which the app should be available for installation. */
    startDateTime?: Date;
    /** Whether the local device time or UTC time should be used when determining the available and deadline times. */
    useLocalTime?: boolean;
}
