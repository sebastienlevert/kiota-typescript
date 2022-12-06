import {AppliedConditionalAccessPolicy, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppliedConditionalAccessPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AppliedConditionalAccessPolicy[];
}
