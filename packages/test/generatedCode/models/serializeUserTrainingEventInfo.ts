import {UserTrainingEventInfo} from './index';
import {serializeUserTrainingContentEventInfo} from './serializeUserTrainingContentEventInfo';
import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserTrainingEventInfo(writer: SerializationWriter, userTrainingEventInfo: UserTrainingEventInfo | undefined = {}) : void {
            writer.writeStringValue("displayName", userTrainingEventInfo.displayName);
            writer.writeEnumValue<TrainingStatus>("latestTrainingStatus", userTrainingEventInfo.latestTrainingStatus);
            writer.writeStringValue("@odata.type", userTrainingEventInfo.odataType);
            writer.writeObjectValueFromMethod("trainingAssignedProperties", userTrainingEventInfo.trainingAssignedProperties as any, serializeUserTrainingContentEventInfo);
            writer.writeObjectValueFromMethod("trainingCompletedProperties", userTrainingEventInfo.trainingCompletedProperties as any, serializeUserTrainingContentEventInfo);
            writer.writeObjectValueFromMethod("trainingUpdatedProperties", userTrainingEventInfo.trainingUpdatedProperties as any, serializeUserTrainingContentEventInfo);
}
