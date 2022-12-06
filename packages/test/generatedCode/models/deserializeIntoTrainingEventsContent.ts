import {deserializeIntoAssignedTrainingInfo} from './deserializeIntoAssignedTrainingInfo';
import {TrainingEventsContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrainingEventsContent(trainingEventsContent: TrainingEventsContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedTrainingsInfos": n => { trainingEventsContent.assignedTrainingsInfos = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedTrainingInfo) as any ; },
        "@odata.type": n => { trainingEventsContent.odataType = n.getStringValue() as any ; },
        "trainingsAssignedUserCount": n => { trainingEventsContent.trainingsAssignedUserCount = n.getNumberValue() as any ; },
    }
}
