import {BaseCollectionPaginationCountResponse, ModifiedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ModifiedPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ModifiedProperty[];
}
