import {BaseCollectionPaginationCountResponse, RelatedContact} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RelatedContactCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RelatedContact[];
}
