import {BaseCollectionPaginationCountResponse, Room} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Room[];
}
