import {BaseCollectionPaginationCountResponse, Subscription} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubscriptionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Subscription[];
}
