import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VirtualAppointmentUser extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The display name of the user who participates in a virtual appointment. Optional. */
    displayName?: string;
    /** The email address of the user who participates in a virtual appointment. Optional. */
    emailAddress?: string;
    /** The phone number for sending SMS texts for the user who participates in a virtual appointment. Optional. */
    smsCapablePhoneNumber?: string;
}
