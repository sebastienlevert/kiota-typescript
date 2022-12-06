import {deserializeIntoAttackSimulationUser} from './deserializeIntoAttackSimulationUser';
import {AttackSimulationRepeatOffender} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationRepeatOffender(attackSimulationRepeatOffender: AttackSimulationRepeatOffender | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attackSimulationUser": n => { attackSimulationRepeatOffender.attackSimulationUser = n.getObject(deserializeIntoAttackSimulationUser) as any ; },
        "@odata.type": n => { attackSimulationRepeatOffender.odataType = n.getStringValue() as any ; },
        "repeatOffenceCount": n => { attackSimulationRepeatOffender.repeatOffenceCount = n.getNumberValue() as any ; },
    }
}
