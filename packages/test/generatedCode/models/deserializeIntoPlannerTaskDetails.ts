import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPlannerChecklistItems} from './deserializeIntoPlannerChecklistItems';
import {deserializeIntoPlannerExternalReferences} from './deserializeIntoPlannerExternalReferences';
import {PlannerTaskDetails} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTaskDetails(plannerTaskDetails: PlannerTaskDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerTaskDetails),
        "checklist": n => { plannerTaskDetails.checklist = n.getObject(deserializeIntoPlannerChecklistItems) as any ; },
        "description": n => { plannerTaskDetails.description = n.getStringValue() as any ; },
        "previewType": n => { plannerTaskDetails.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType) as any ; },
        "references": n => { plannerTaskDetails.references = n.getObject(deserializeIntoPlannerExternalReferences) as any ; },
    }
}
