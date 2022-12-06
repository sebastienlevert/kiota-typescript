import {SimulationAutomation} from './index';
import {serializeEmailIdentity} from './serializeEmailIdentity';
import {serializeEntity} from './serializeEntity';
import {serializeSimulationAutomationRun} from './serializeSimulationAutomationRun';
import {SimulationAutomationStatus} from './simulationAutomationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationAutomation(writer: SerializationWriter, simulationAutomation: SimulationAutomation | undefined = {}) : void {
        serializeEntity(writer, simulationAutomation)
            writer.writeObjectValueFromMethod("createdBy", simulationAutomation.createdBy as any, serializeEmailIdentity);
            writer.writeDateValue("createdDateTime", simulationAutomation.createdDateTime);
            writer.writeStringValue("description", simulationAutomation.description);
            writer.writeStringValue("displayName", simulationAutomation.displayName);
            writer.writeObjectValueFromMethod("lastModifiedBy", simulationAutomation.lastModifiedBy as any, serializeEmailIdentity);
            writer.writeDateValue("lastModifiedDateTime", simulationAutomation.lastModifiedDateTime);
            writer.writeDateValue("lastRunDateTime", simulationAutomation.lastRunDateTime);
            writer.writeDateValue("nextRunDateTime", simulationAutomation.nextRunDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("runs", simulationAutomation.runs as any, serializeSimulationAutomationRun);
            writer.writeEnumValue<SimulationAutomationStatus>("status", simulationAutomation.status);
}
