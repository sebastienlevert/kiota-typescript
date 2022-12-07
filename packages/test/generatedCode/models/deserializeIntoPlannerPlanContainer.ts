import {PlannerPlanContainer} from './index';
import {PlannerContainerType} from './plannerContainerType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanContainer(plannerPlanContainer: PlannerPlanContainer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "containerId": n => { plannerPlanContainer.containerId = n.getStringValue() as any ; },
        "type": n => { plannerPlanContainer.type = n.getEnumValue<PlannerContainerType>(PlannerContainerType) as any ; },
        "url": n => { plannerPlanContainer.url = n.getStringValue() as any ; },
    }
}
