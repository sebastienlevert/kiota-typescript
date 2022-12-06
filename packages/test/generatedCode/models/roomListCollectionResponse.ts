import {BaseCollectionPaginationCountResponse, RoomList} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomListCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RoomList[];
}
