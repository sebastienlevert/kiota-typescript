import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VirtualAppointmentSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether the client can use the browser to join a virtual appointment. If set to false, the client can only use Microsoft Teams to join. Optional. */
    allowClientToJoinUsingBrowser?: boolean;
}
