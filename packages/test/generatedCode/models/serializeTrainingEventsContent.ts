import {TrainingEventsContent} from './index';
import {serializeAssignedTrainingInfo} from './serializeAssignedTrainingInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrainingEventsContent(writer: SerializationWriter, trainingEventsContent: TrainingEventsContent | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("assignedTrainingsInfos", trainingEventsContent.assignedTrainingsInfos as any, serializeAssignedTrainingInfo);
            writer.writeStringValue("@odata.type", trainingEventsContent.odataType);
            writer.writeNumberValue("trainingsAssignedUserCount", trainingEventsContent.trainingsAssignedUserCount);
}
