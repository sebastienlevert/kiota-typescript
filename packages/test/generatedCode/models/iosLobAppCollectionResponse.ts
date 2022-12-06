import {BaseCollectionPaginationCountResponse, IosLobApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosLobApp[];
}
