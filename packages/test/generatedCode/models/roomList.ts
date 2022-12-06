import {Place, Room} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomList extends Partial<Parsable>, Place {
    /** The email address of the room list. */
    emailAddress?: string;
    /** The rooms property */
    rooms?: Room[];
}
