import {Simulation} from './index';
import {PayloadDeliveryPlatform} from './payloadDeliveryPlatform';
import {serializeEmailIdentity} from './serializeEmailIdentity';
import {serializeEntity} from './serializeEntity';
import {serializeSimulationReport} from './serializeSimulationReport';
import {SimulationAttackTechnique} from './simulationAttackTechnique';
import {SimulationAttackType} from './simulationAttackType';
import {SimulationStatus} from './simulationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulation(writer: SerializationWriter, simulation: Simulation | undefined = {}) : void {
        serializeEntity(writer, simulation)
            writer.writeEnumValue<SimulationAttackTechnique>("attackTechnique", simulation.attackTechnique);
            writer.writeEnumValue<SimulationAttackType>("attackType", simulation.attackType);
            writer.writeStringValue("automationId", simulation.automationId);
            writer.writeDateValue("completionDateTime", simulation.completionDateTime);
            writer.writeObjectValueFromMethod("createdBy", simulation.createdBy as any, serializeEmailIdentity);
            writer.writeDateValue("createdDateTime", simulation.createdDateTime);
            writer.writeStringValue("description", simulation.description);
            writer.writeStringValue("displayName", simulation.displayName);
            writer.writeBooleanValue("isAutomated", simulation.isAutomated);
            writer.writeObjectValueFromMethod("lastModifiedBy", simulation.lastModifiedBy as any, serializeEmailIdentity);
            writer.writeDateValue("lastModifiedDateTime", simulation.lastModifiedDateTime);
            writer.writeDateValue("launchDateTime", simulation.launchDateTime);
            writer.writeEnumValue<PayloadDeliveryPlatform>("payloadDeliveryPlatform", simulation.payloadDeliveryPlatform);
            writer.writeObjectValueFromMethod("report", simulation.report as any, serializeSimulationReport);
            writer.writeEnumValue<SimulationStatus>("status", simulation.status);
}
