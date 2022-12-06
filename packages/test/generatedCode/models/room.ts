import {BookingType} from './bookingType';
import {Place} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Room extends Partial<Parsable>, Place {
    /** Specifies the name of the audio device in the room. */
    audioDeviceName?: string;
    /** Type of room. Possible values are standard, and reserved. */
    bookingType?: BookingType;
    /** Specifies the building name or building number that the room is in. */
    building?: string;
    /** Specifies the capacity of the room. */
    capacity?: number;
    /** Specifies the name of the display device in the room. */
    displayDeviceName?: string;
    /** Email address of the room. */
    emailAddress?: string;
    /** Specifies a descriptive label for the floor, for example, P. */
    floorLabel?: string;
    /** Specifies the floor number that the room is on. */
    floorNumber?: number;
    /** Specifies whether the room is wheelchair accessible. */
    isWheelChairAccessible?: boolean;
    /** Specifies a descriptive label for the room, for example, a number or name. */
    label?: string;
    /** Specifies a nickname for the room, for example, 'conf room'. */
    nickname?: string;
    /** Specifies additional features of the room, for example, details like the type of view or furniture type. */
    tags?: string[];
    /** Specifies the name of the video device in the room. */
    videoDeviceName?: string;
}
