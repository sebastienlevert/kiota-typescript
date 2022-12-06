import {UserSimulationDetails} from './index';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {serializeUserSimulationEventInfo} from './serializeUserSimulationEventInfo';
import {serializeUserTrainingEventInfo} from './serializeUserTrainingEventInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSimulationDetails(writer: SerializationWriter, userSimulationDetails: UserSimulationDetails | undefined = {}) : void {
            writer.writeNumberValue("assignedTrainingsCount", userSimulationDetails.assignedTrainingsCount);
            writer.writeNumberValue("completedTrainingsCount", userSimulationDetails.completedTrainingsCount);
            writer.writeDateValue("compromisedDateTime", userSimulationDetails.compromisedDateTime);
            writer.writeNumberValue("inProgressTrainingsCount", userSimulationDetails.inProgressTrainingsCount);
            writer.writeBooleanValue("isCompromised", userSimulationDetails.isCompromised);
            writer.writeStringValue("@odata.type", userSimulationDetails.odataType);
            writer.writeDateValue("reportedPhishDateTime", userSimulationDetails.reportedPhishDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("simulationEvents", userSimulationDetails.simulationEvents as any, serializeUserSimulationEventInfo);
            writer.writeObjectValueFromMethod("simulationUser", userSimulationDetails.simulationUser as any, serializeAttackSimulationUser);
            writer.writeCollectionOfObjectValuesFromMethod("trainingEvents", userSimulationDetails.trainingEvents as any, serializeUserTrainingEventInfo);
}
