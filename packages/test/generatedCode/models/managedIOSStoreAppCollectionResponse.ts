import {BaseCollectionPaginationCountResponse, ManagedIOSStoreApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSStoreAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedIOSStoreApp[];
}
