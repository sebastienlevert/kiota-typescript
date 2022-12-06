import {CalendarSharingMessageAction, Message} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarSharingMessage extends Message, Partial<Parsable> {
    /** The canAccept property */
    canAccept?: boolean;
    /** The sharingMessageAction property */
    sharingMessageAction?: CalendarSharingMessageAction;
    /** The sharingMessageActions property */
    sharingMessageActions?: CalendarSharingMessageAction[];
    /** The suggestedCalendarName property */
    suggestedCalendarName?: string;
}
