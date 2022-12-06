import {BaseCollectionPaginationCountResponse, EventMessageResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageResponseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EventMessageResponse[];
}
