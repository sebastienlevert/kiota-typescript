import {BaseCollectionPaginationCountResponse, SubscribedSku} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubscribedSkuCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SubscribedSku[];
}
