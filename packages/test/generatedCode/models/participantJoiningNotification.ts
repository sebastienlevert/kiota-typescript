import {Call, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantJoiningNotification extends Entity, Partial<Parsable> {
    /** The call property */
    call?: Call;
}
