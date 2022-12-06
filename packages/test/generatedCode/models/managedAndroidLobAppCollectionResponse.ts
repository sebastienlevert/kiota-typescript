import {BaseCollectionPaginationCountResponse, ManagedAndroidLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAndroidLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAndroidLobApp[];
}
