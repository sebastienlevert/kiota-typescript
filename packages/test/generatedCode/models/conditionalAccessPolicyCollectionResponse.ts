import {BaseCollectionPaginationCountResponse, ConditionalAccessPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ConditionalAccessPolicy[];
}
