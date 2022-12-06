import {BaseCollectionPaginationCountResponse, Win32LobAppReturnCode} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppReturnCodeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Win32LobAppReturnCode[];
}
