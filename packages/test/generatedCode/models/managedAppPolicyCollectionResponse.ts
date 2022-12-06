import {BaseCollectionPaginationCountResponse, ManagedAppPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppPolicy[];
}
