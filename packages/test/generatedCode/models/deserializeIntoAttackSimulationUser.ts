import {AttackSimulationUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationUser(attackSimulationUser: AttackSimulationUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { attackSimulationUser.displayName = n.getStringValue() as any ; },
        "email": n => { attackSimulationUser.email = n.getStringValue() as any ; },
        "@odata.type": n => { attackSimulationUser.odataType = n.getStringValue() as any ; },
        "userId": n => { attackSimulationUser.userId = n.getStringValue() as any ; },
    }
}
