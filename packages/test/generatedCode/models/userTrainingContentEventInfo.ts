import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserTrainingContentEventInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Browser of the user from where the training event was generated. */
    browser?: string;
    /** Date and time of the training content playback by the user. */
    contentDateTime?: Date;
    /** IP address of the user for the training event. */
    ipAddress?: string;
    /** The OdataType property */
    odataType?: string;
    /** The operating system, platform, and device details of the user for the training event. */
    osPlatformDeviceDetails?: string;
    /** Potential improvement in the tenant security posture after completion of the training by the user. */
    potentialScoreImpact?: number;
}
