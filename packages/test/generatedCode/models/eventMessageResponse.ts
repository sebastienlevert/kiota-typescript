import {EventMessage, TimeSlot} from './index';
import {ResponseType} from './responseType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageResponse extends EventMessage, Partial<Parsable> {
    /** The proposedNewTime property */
    proposedNewTime?: TimeSlot;
    /** The responseType property */
    responseType?: ResponseType;
}
