import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AssignmentFilterEvaluationStatusDetails extends Entity, Partial<Parsable> {
    /** PayloadId on which filter has been applied. */
    payloadId?: string;
}
