import {ActivityBasedTimeoutPolicy, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityBasedTimeoutPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ActivityBasedTimeoutPolicy[];
}
