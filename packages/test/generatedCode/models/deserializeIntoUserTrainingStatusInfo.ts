import {UserTrainingStatusInfo} from './index';
import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingStatusInfo(userTrainingStatusInfo: UserTrainingStatusInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedDateTime": n => { userTrainingStatusInfo.assignedDateTime = n.getDateValue() as any ; },
        "completionDateTime": n => { userTrainingStatusInfo.completionDateTime = n.getDateValue() as any ; },
        "displayName": n => { userTrainingStatusInfo.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { userTrainingStatusInfo.odataType = n.getStringValue() as any ; },
        "trainingStatus": n => { userTrainingStatusInfo.trainingStatus = n.getEnumValue<TrainingStatus>(TrainingStatus) as any ; },
    }
}
