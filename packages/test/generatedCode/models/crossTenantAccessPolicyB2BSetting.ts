import {CrossTenantAccessPolicyTargetConfiguration} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyB2BSetting extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of applications targeted with your cross-tenant access policy. */
    applications?: CrossTenantAccessPolicyTargetConfiguration;
    /** The OdataType property */
    odataType?: string;
    /** The list of users and groups targeted with your cross-tenant access policy. */
    usersAndGroups?: CrossTenantAccessPolicyTargetConfiguration;
}
