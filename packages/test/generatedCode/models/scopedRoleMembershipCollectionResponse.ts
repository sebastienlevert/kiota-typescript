import {BaseCollectionPaginationCountResponse, ScopedRoleMembership} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembershipCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ScopedRoleMembership[];
}
