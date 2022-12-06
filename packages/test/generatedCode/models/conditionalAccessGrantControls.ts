import {ConditionalAccessGrantControl} from './conditionalAccessGrantControl';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessGrantControls extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue. */
    builtInControls?: ConditionalAccessGrantControl[];
    /** List of custom controls IDs required by the policy. For more information, see Custom controls. */
    customAuthenticationFactors?: string[];
    /** The OdataType property */
    odataType?: string;
    /** Defines the relationship of the grant controls. Possible values: AND, OR. */
    operator?: string;
    /** List of terms of use IDs required by the policy. */
    termsOfUse?: string[];
}
