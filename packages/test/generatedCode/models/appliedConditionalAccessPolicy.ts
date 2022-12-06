import {AppliedConditionalAccessPolicyResult} from './appliedConditionalAccessPolicyResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppliedConditionalAccessPolicy extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Refers to the Name of the conditional access policy (example: 'Require MFA for Salesforce'). */
    displayName?: string;
    /** Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor authentication'). */
    enforcedGrantControls?: string[];
    /** Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls'). */
    enforcedSessionControls?: string[];
    /** An identifier of the conditional access policy. */
    id?: string;
    /** The OdataType property */
    odataType?: string;
    /** Indicates the result of the CA policy that was triggered. Possible values are: success, failure, notApplied (Policy isn't applied because policy conditions were not met),notEnabled (This is due to the policy in disabled state), unknown, unknownFutureValue. */
    result?: AppliedConditionalAccessPolicyResult;
}
