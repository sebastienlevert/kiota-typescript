import {BaseCollectionPaginationCountResponse, Contact} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Contact[];
}
