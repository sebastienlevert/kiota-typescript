import {BaseCollectionPaginationCountResponse, MacOSLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSLobApp[];
}
