import {AdvancedConfigState} from './advancedConfigState';
import {FeatureTarget} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodFeatureConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A single entity that is excluded from this feature. */
    excludeTarget?: FeatureTarget;
    /** A single entity that is included in this feature. */
    includeTarget?: FeatureTarget;
    /** The OdataType property */
    odataType?: string;
    /** Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled. */
    state?: AdvancedConfigState;
}
