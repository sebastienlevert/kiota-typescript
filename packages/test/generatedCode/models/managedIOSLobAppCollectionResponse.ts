import {BaseCollectionPaginationCountResponse, ManagedIOSLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedIOSLobApp[];
}
