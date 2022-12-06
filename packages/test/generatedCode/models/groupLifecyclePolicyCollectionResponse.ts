import {BaseCollectionPaginationCountResponse, GroupLifecyclePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupLifecyclePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: GroupLifecyclePolicy[];
}
