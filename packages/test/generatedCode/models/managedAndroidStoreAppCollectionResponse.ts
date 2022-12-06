import {BaseCollectionPaginationCountResponse, ManagedAndroidStoreApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAndroidStoreAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAndroidStoreApp[];
}
