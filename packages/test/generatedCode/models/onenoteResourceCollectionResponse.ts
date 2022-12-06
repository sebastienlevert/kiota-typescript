import {BaseCollectionPaginationCountResponse, OnenoteResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OnenoteResource[];
}
