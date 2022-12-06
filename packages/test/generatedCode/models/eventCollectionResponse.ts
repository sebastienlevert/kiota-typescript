import {BaseCollectionPaginationCountResponse, Event} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Event[];
}
