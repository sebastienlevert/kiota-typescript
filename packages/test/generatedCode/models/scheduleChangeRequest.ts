import {ChangeTrackedEntity} from './index';
import {ScheduleChangeRequestActor} from './scheduleChangeRequestActor';
import {ScheduleChangeState} from './scheduleChangeState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleChangeRequest extends ChangeTrackedEntity, Partial<Parsable> {
    /** The assignedTo property */
    assignedTo?: ScheduleChangeRequestActor;
    /** The managerActionDateTime property */
    managerActionDateTime?: Date;
    /** The managerActionMessage property */
    managerActionMessage?: string;
    /** The managerUserId property */
    managerUserId?: string;
    /** The senderDateTime property */
    senderDateTime?: Date;
    /** The senderMessage property */
    senderMessage?: string;
    /** The senderUserId property */
    senderUserId?: string;
    /** The state property */
    state?: ScheduleChangeState;
}
