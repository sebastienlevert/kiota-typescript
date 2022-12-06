import {CrossTenantAccessPolicyTargetType} from './crossTenantAccessPolicyTargetType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyTarget extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** The unique identifier of the user, group, or application; one of the following keywords: AllUsers and AllApplications; or for targets that are applications, you may use reserved values. */
    target?: string;
    /** The type of resource that you want to target. The possible values are: user, group, application, unknownFutureValue. */
    targetType?: CrossTenantAccessPolicyTargetType;
}
