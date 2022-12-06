import {ConditionalAccessConditionSet, ConditionalAccessGrantControls, ConditionalAccessSessionControls} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicyDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The conditions property */
    conditions?: ConditionalAccessConditionSet;
    /** Represents grant controls that must be fulfilled for the policy. */
    grantControls?: ConditionalAccessGrantControls;
    /** The OdataType property */
    odataType?: string;
    /** Represents a complex type of session controls that is enforced after sign-in. */
    sessionControls?: ConditionalAccessSessionControls;
}
