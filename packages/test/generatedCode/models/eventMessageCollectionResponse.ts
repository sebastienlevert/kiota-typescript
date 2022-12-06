import {BaseCollectionPaginationCountResponse, EventMessage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EventMessage[];
}
