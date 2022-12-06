import {UserTrainingStatusInfo} from './index';
import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserTrainingStatusInfo(writer: SerializationWriter, userTrainingStatusInfo: UserTrainingStatusInfo | undefined = {}) : void {
            writer.writeDateValue("assignedDateTime", userTrainingStatusInfo.assignedDateTime);
            writer.writeDateValue("completionDateTime", userTrainingStatusInfo.completionDateTime);
            writer.writeStringValue("displayName", userTrainingStatusInfo.displayName);
            writer.writeStringValue("@odata.type", userTrainingStatusInfo.odataType);
            writer.writeEnumValue<TrainingStatus>("trainingStatus", userTrainingStatusInfo.trainingStatus);
}
