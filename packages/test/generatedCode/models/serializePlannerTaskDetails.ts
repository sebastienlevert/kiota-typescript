import {PlannerTaskDetails} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {serializeItemBody} from './serializeItemBody';
import {serializePlannerChecklistItems} from './serializePlannerChecklistItems';
import {serializePlannerDelta} from './serializePlannerDelta';
import {serializePlannerExternalReferences} from './serializePlannerExternalReferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTaskDetails(writer: SerializationWriter, plannerTaskDetails: PlannerTaskDetails | undefined = {}) : void {
        serializePlannerDelta(writer, plannerTaskDetails)
            writer.writeObjectValueFromMethod("checklist", plannerTaskDetails.checklist as any, serializePlannerChecklistItems);
            writer.writeStringValue("description", plannerTaskDetails.description);
            writer.writeObjectValueFromMethod("notes", plannerTaskDetails.notes as any, serializeItemBody);
            writer.writeEnumValue<PlannerPreviewType>("previewType", plannerTaskDetails.previewType);
            writer.writeObjectValueFromMethod("references", plannerTaskDetails.references as any, serializePlannerExternalReferences);
}
