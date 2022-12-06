import {AssignedTrainingInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedTrainingInfo(assignedTrainingInfo: AssignedTrainingInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedUserCount": n => { assignedTrainingInfo.assignedUserCount = n.getNumberValue() as any ; },
        "completedUserCount": n => { assignedTrainingInfo.completedUserCount = n.getNumberValue() as any ; },
        "displayName": n => { assignedTrainingInfo.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { assignedTrainingInfo.odataType = n.getStringValue() as any ; },
    }
}
