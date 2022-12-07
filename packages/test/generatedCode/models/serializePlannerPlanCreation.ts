import {PlannerPlanCreation} from './index';
import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanCreation(writer: SerializationWriter, plannerPlanCreation: PlannerPlanCreation | undefined = {}) : void {
            writer.writeEnumValue<PlannerCreationSourceKind>("creationSourceKind", plannerPlanCreation.creationSourceKind);
}
