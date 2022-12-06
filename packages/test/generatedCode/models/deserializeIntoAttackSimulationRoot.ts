import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSimulation} from './deserializeIntoSimulation';
import {deserializeIntoSimulationAutomation} from './deserializeIntoSimulationAutomation';
import {AttackSimulationRoot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationRoot(attackSimulationRoot: AttackSimulationRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attackSimulationRoot),
        "simulationAutomations": n => { attackSimulationRoot.simulationAutomations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulationAutomation) as any ; },
        "simulations": n => { attackSimulationRoot.simulations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSimulation) as any ; },
    }
}
