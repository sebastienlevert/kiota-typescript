import {BaseCollectionPaginationCountResponse, ManagedEBook} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedEBook[];
}
