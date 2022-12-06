import {BaseCollectionPaginationCountResponse, ManagedAppPolicy} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetManagedAppPoliciesResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppPolicy[];
}
