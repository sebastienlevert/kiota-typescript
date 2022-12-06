import {deserializeIntoUserTrainingContentEventInfo} from './deserializeIntoUserTrainingContentEventInfo';
import {UserTrainingEventInfo} from './index';
import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingEventInfo(userTrainingEventInfo: UserTrainingEventInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { userTrainingEventInfo.displayName = n.getStringValue() as any ; },
        "latestTrainingStatus": n => { userTrainingEventInfo.latestTrainingStatus = n.getEnumValue<TrainingStatus>(TrainingStatus) as any ; },
        "@odata.type": n => { userTrainingEventInfo.odataType = n.getStringValue() as any ; },
        "trainingAssignedProperties": n => { userTrainingEventInfo.trainingAssignedProperties = n.getObject(deserializeIntoUserTrainingContentEventInfo) as any ; },
        "trainingCompletedProperties": n => { userTrainingEventInfo.trainingCompletedProperties = n.getObject(deserializeIntoUserTrainingContentEventInfo) as any ; },
        "trainingUpdatedProperties": n => { userTrainingEventInfo.trainingUpdatedProperties = n.getObject(deserializeIntoUserTrainingContentEventInfo) as any ; },
    }
}
