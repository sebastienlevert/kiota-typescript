import {PlannerPlanContainer} from './index';
import {PlannerContainerType} from './plannerContainerType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanContainer(writer: SerializationWriter, plannerPlanContainer: PlannerPlanContainer | undefined = {}) : void {
            writer.writeStringValue("containerId", plannerPlanContainer.containerId);
            writer.writeEnumValue<PlannerContainerType>("type", plannerPlanContainer.type);
            writer.writeStringValue("url", plannerPlanContainer.url);
}
