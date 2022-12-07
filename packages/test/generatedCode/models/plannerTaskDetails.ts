import {ItemBody, PlannerChecklistItems, PlannerDelta, PlannerExternalReferences} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTaskDetails extends Partial<Parsable>, PlannerDelta {
    /** The checklist property */
    checklist?: PlannerChecklistItems;
    /** Description of the task. */
    description?: string;
    /** The notes property */
    notes?: ItemBody;
    /** The previewType property */
    previewType?: PlannerPreviewType;
    /** The references property */
    references?: PlannerExternalReferences;
}
