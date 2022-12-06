import {BaseCollectionPaginationCountResponse, IdentitySecurityDefaultsEnforcementPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentitySecurityDefaultsEnforcementPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentitySecurityDefaultsEnforcementPolicy[];
}
