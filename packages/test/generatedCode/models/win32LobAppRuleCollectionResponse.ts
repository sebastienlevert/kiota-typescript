import {BaseCollectionPaginationCountResponse, Win32LobAppRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Win32LobAppRule[];
}
