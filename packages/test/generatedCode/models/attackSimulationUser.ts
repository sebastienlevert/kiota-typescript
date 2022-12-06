import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationUser extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Display name of the user. */
    displayName?: string;
    /** Email address of the user. */
    email?: string;
    /** The OdataType property */
    odataType?: string;
    /** This is the id property value of the user resource that represents the user in the Azure Active Directory tenant. */
    userId?: string;
}
