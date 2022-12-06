import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SimulationAutomationRun} from './index';
import {SimulationAutomationRunStatus} from './simulationAutomationRunStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomationRun(simulationAutomationRun: SimulationAutomationRun | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(simulationAutomationRun),
        "endDateTime": n => { simulationAutomationRun.endDateTime = n.getDateValue() as any ; },
        "simulationId": n => { simulationAutomationRun.simulationId = n.getStringValue() as any ; },
        "startDateTime": n => { simulationAutomationRun.startDateTime = n.getDateValue() as any ; },
        "status": n => { simulationAutomationRun.status = n.getEnumValue<SimulationAutomationRunStatus>(SimulationAutomationRunStatus) as any ; },
    }
}
