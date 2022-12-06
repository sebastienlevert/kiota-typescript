import {BaseCollectionPaginationCountResponse, Chat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Chat[];
}
