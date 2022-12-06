import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerProgressTaskBoardTaskFormat extends Entity, Partial<Parsable> {
    /** Hint value used to order the task on the progress view of the task board. For details about the supported format, see Using order hints in Planner. */
    orderHint?: string;
}
