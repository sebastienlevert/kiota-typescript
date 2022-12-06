import {BaseCollectionPaginationCountResponse, EventMessageRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EventMessageRequest[];
}
