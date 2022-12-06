import {deserializeIntoEmailIdentity} from './deserializeIntoEmailIdentity';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSimulationAutomationRun} from './deserializeIntoSimulationAutomationRun';
import {SimulationAutomation} from './index';
import {SimulationAutomationStatus} from './simulationAutomationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomation(simulationAutomation: SimulationAutomation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(simulationAutomation),
        "createdBy": n => { simulationAutomation.createdBy = n.getObject(deserializeIntoEmailIdentity) as any ; },
        "createdDateTime": n => { simulationAutomation.createdDateTime = n.getDateValue() as any ; },
        "description": n => { simulationAutomation.description = n.getStringValue() as any ; },
        "displayName": n => { simulationAutomation.displayName = n.getStringValue() as any ; },
        "lastModifiedBy": n => { simulationAutomation.lastModifiedBy = n.getObject(deserializeIntoEmailIdentity) as any ; },
        "lastModifiedDateTime": n => { simulationAutomation.lastModifiedDateTime = n.getDateValue() as any ; },
        "lastRunDateTime": n => { simulationAutomation.lastRunDateTime = n.getDateValue() as any ; },
        "nextRunDateTime": n => { simulationAutomation.nextRunDateTime = n.getDateValue() as any ; },
        "runs": n => { simulationAutomation.runs = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulationAutomationRun) as any ; },
        "status": n => { simulationAutomation.status = n.getEnumValue<SimulationAutomationStatus>(SimulationAutomationStatus) as any ; },
    }
}
