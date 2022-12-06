import {Fido2RestrictionEnforcementType} from './fido2RestrictionEnforcementType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2KeyRestrictions extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** A collection of Authenticator Attestation GUIDs. AADGUIDs define key types and manufacturers. */
    aaGuids?: string[];
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Enforcement type. Possible values are: allow, block. */
    enforcementType?: Fido2RestrictionEnforcementType;
    /** Determines if the configured key enforcement is enabled. */
    isEnforced?: boolean;
    /** The OdataType property */
    odataType?: string;
}
