import {AssignedTrainingInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedTrainingInfo(writer: SerializationWriter, assignedTrainingInfo: AssignedTrainingInfo | undefined = {}) : void {
            writer.writeNumberValue("assignedUserCount", assignedTrainingInfo.assignedUserCount);
            writer.writeNumberValue("completedUserCount", assignedTrainingInfo.completedUserCount);
            writer.writeStringValue("displayName", assignedTrainingInfo.displayName);
            writer.writeStringValue("@odata.type", assignedTrainingInfo.odataType);
}
