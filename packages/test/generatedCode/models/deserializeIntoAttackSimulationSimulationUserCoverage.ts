import {deserializeIntoAttackSimulationUser} from './deserializeIntoAttackSimulationUser';
import {AttackSimulationSimulationUserCoverage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationSimulationUserCoverage(attackSimulationSimulationUserCoverage: AttackSimulationSimulationUserCoverage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attackSimulationUser": n => { attackSimulationSimulationUserCoverage.attackSimulationUser = n.getObject(deserializeIntoAttackSimulationUser) as any ; },
        "clickCount": n => { attackSimulationSimulationUserCoverage.clickCount = n.getNumberValue() as any ; },
        "compromisedCount": n => { attackSimulationSimulationUserCoverage.compromisedCount = n.getNumberValue() as any ; },
        "latestSimulationDateTime": n => { attackSimulationSimulationUserCoverage.latestSimulationDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { attackSimulationSimulationUserCoverage.odataType = n.getStringValue() as any ; },
        "simulationCount": n => { attackSimulationSimulationUserCoverage.simulationCount = n.getNumberValue() as any ; },
    }
}
