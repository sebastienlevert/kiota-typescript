import {deserializeIntoEmailIdentity} from './deserializeIntoEmailIdentity';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSimulationReport} from './deserializeIntoSimulationReport';
import {Simulation} from './index';
import {PayloadDeliveryPlatform} from './payloadDeliveryPlatform';
import {SimulationAttackTechnique} from './simulationAttackTechnique';
import {SimulationAttackType} from './simulationAttackType';
import {SimulationStatus} from './simulationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulation(simulation: Simulation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(simulation),
        "attackTechnique": n => { simulation.attackTechnique = n.getEnumValue<SimulationAttackTechnique>(SimulationAttackTechnique) as any ; },
        "attackType": n => { simulation.attackType = n.getEnumValue<SimulationAttackType>(SimulationAttackType) as any ; },
        "automationId": n => { simulation.automationId = n.getStringValue() as any ; },
        "completionDateTime": n => { simulation.completionDateTime = n.getDateValue() as any ; },
        "createdBy": n => { simulation.createdBy = n.getObject(deserializeIntoEmailIdentity) as any ; },
        "createdDateTime": n => { simulation.createdDateTime = n.getDateValue() as any ; },
        "description": n => { simulation.description = n.getStringValue() as any ; },
        "displayName": n => { simulation.displayName = n.getStringValue() as any ; },
        "isAutomated": n => { simulation.isAutomated = n.getBooleanValue() as any ; },
        "lastModifiedBy": n => { simulation.lastModifiedBy = n.getObject(deserializeIntoEmailIdentity) as any ; },
        "lastModifiedDateTime": n => { simulation.lastModifiedDateTime = n.getDateValue() as any ; },
        "launchDateTime": n => { simulation.launchDateTime = n.getDateValue() as any ; },
        "payloadDeliveryPlatform": n => { simulation.payloadDeliveryPlatform = n.getEnumValue<PayloadDeliveryPlatform>(PayloadDeliveryPlatform) as any ; },
        "report": n => { simulation.report = n.getObject(deserializeIntoSimulationReport) as any ; },
        "status": n => { simulation.status = n.getEnumValue<SimulationStatus>(SimulationStatus) as any ; },
    }
}
