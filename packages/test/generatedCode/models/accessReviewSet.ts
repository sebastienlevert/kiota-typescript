import {AccessReviewHistoryDefinition, AccessReviewScheduleDefinition, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewSet extends Entity, Partial<Parsable> {
    /** Represents the template and scheduling for an access review. */
    definitions?: AccessReviewScheduleDefinition[];
    /** Represents a collection of access review history data and the scopes used to collect that data. */
    historyDefinitions?: AccessReviewHistoryDefinition[];
}
