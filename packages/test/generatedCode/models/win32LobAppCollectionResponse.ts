import {BaseCollectionPaginationCountResponse, Win32LobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Win32LobApp[];
}
