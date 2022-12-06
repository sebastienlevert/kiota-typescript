import {BaseCollectionPaginationCountResponse, MacOSLobChildApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSLobChildAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSLobChildApp[];
}
