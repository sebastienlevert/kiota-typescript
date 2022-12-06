import {deserializeIntoAttackSimulationUser} from './deserializeIntoAttackSimulationUser';
import {deserializeIntoUserSimulationEventInfo} from './deserializeIntoUserSimulationEventInfo';
import {deserializeIntoUserTrainingEventInfo} from './deserializeIntoUserTrainingEventInfo';
import {UserSimulationDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSimulationDetails(userSimulationDetails: UserSimulationDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedTrainingsCount": n => { userSimulationDetails.assignedTrainingsCount = n.getNumberValue() as any ; },
        "completedTrainingsCount": n => { userSimulationDetails.completedTrainingsCount = n.getNumberValue() as any ; },
        "compromisedDateTime": n => { userSimulationDetails.compromisedDateTime = n.getDateValue() as any ; },
        "inProgressTrainingsCount": n => { userSimulationDetails.inProgressTrainingsCount = n.getNumberValue() as any ; },
        "isCompromised": n => { userSimulationDetails.isCompromised = n.getBooleanValue() as any ; },
        "@odata.type": n => { userSimulationDetails.odataType = n.getStringValue() as any ; },
        "reportedPhishDateTime": n => { userSimulationDetails.reportedPhishDateTime = n.getDateValue() as any ; },
        "simulationEvents": n => { userSimulationDetails.simulationEvents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSimulationEventInfo) as any ; },
        "simulationUser": n => { userSimulationDetails.simulationUser = n.getObject(deserializeIntoAttackSimulationUser) as any ; },
        "trainingEvents": n => { userSimulationDetails.trainingEvents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserTrainingEventInfo) as any ; },
    }
}
