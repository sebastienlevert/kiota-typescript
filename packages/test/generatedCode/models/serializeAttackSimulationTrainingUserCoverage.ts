import {AttackSimulationTrainingUserCoverage} from './index';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {serializeUserTrainingStatusInfo} from './serializeUserTrainingStatusInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationTrainingUserCoverage(writer: SerializationWriter, attackSimulationTrainingUserCoverage: AttackSimulationTrainingUserCoverage | undefined = {}) : void {
            writer.writeObjectValueFromMethod("attackSimulationUser", attackSimulationTrainingUserCoverage.attackSimulationUser as any, serializeAttackSimulationUser);
            writer.writeStringValue("@odata.type", attackSimulationTrainingUserCoverage.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("userTrainings", attackSimulationTrainingUserCoverage.userTrainings as any, serializeUserTrainingStatusInfo);
}
