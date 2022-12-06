import {CrossTenantAccessPolicyTargetConfigurationAccessType} from './crossTenantAccessPolicyTargetConfigurationAccessType';
import {CrossTenantAccessPolicyTarget} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyTargetConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Defines whether access is allowed or blocked. The possible values are: allowed, blocked, unknownFutureValue. */
    accessType?: CrossTenantAccessPolicyTargetConfigurationAccessType;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Specifies whether to target users, groups, or applications with this rule. */
    targets?: CrossTenantAccessPolicyTarget[];
}
