import {deserializeIntoAttackSimulationUser} from './deserializeIntoAttackSimulationUser';
import {deserializeIntoUserTrainingStatusInfo} from './deserializeIntoUserTrainingStatusInfo';
import {AttackSimulationTrainingUserCoverage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttackSimulationTrainingUserCoverage(attackSimulationTrainingUserCoverage: AttackSimulationTrainingUserCoverage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attackSimulationUser": n => { attackSimulationTrainingUserCoverage.attackSimulationUser = n.getObject(deserializeIntoAttackSimulationUser) as any ; },
        "@odata.type": n => { attackSimulationTrainingUserCoverage.odataType = n.getStringValue() as any ; },
        "userTrainings": n => { attackSimulationTrainingUserCoverage.userTrainings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserTrainingStatusInfo) as any ; },
    }
}
