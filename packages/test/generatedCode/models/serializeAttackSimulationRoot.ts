import {AttackSimulationRoot} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeSimulation} from './serializeSimulation';
import {serializeSimulationAutomation} from './serializeSimulationAutomation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationRoot(writer: SerializationWriter, attackSimulationRoot: AttackSimulationRoot | undefined = {}) : void {
        serializeEntity(writer, attackSimulationRoot)
            writer.writeCollectionOfObjectValuesFromMethod("simulationAutomations", attackSimulationRoot.simulationAutomations as any, serializeSimulationAutomation);
            writer.writeCollectionOfObjectValuesFromMethod("simulations", attackSimulationRoot.simulations as any, serializeSimulation);
}
