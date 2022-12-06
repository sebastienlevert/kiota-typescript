import {PlannerGroup} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePlannerPlan} from './serializePlannerPlan';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerGroup(writer: SerializationWriter, plannerGroup: PlannerGroup | undefined = {}) : void {
        serializeEntity(writer, plannerGroup)
            writer.writeCollectionOfObjectValuesFromMethod("plans", plannerGroup.plans as any, serializePlannerPlan);
}
