import {PlannerTaskDetails} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {serializeEntity} from './serializeEntity';
import {serializePlannerChecklistItems} from './serializePlannerChecklistItems';
import {serializePlannerExternalReferences} from './serializePlannerExternalReferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTaskDetails(writer: SerializationWriter, plannerTaskDetails: PlannerTaskDetails | undefined = {}) : void {
        serializeEntity(writer, plannerTaskDetails)
            writer.writeObjectValueFromMethod("checklist", plannerTaskDetails.checklist as any, serializePlannerChecklistItems);
            writer.writeStringValue("description", plannerTaskDetails.description);
            writer.writeEnumValue<PlannerPreviewType>("previewType", plannerTaskDetails.previewType);
            writer.writeObjectValueFromMethod("references", plannerTaskDetails.references as any, serializePlannerExternalReferences);
}
