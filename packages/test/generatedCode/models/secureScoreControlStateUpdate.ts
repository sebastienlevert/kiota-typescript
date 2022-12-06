import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlStateUpdate extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Assigns the control to the user who will take the action. */
    assignedTo?: string;
    /** Provides optional comment about the control. */
    comment?: string;
    /** The OdataType property */
    odataType?: string;
    /** State of the control, which can be modified via a PATCH command (for example, ignored, thirdParty). */
    state?: string;
    /** ID of the user who updated tenant state. */
    updatedBy?: string;
    /** Time at which the control state was updated. */
    updatedDateTime?: Date;
}
