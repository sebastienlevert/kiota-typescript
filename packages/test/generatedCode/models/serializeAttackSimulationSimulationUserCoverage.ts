import {AttackSimulationSimulationUserCoverage} from './index';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationSimulationUserCoverage(writer: SerializationWriter, attackSimulationSimulationUserCoverage: AttackSimulationSimulationUserCoverage | undefined = {}) : void {
            writer.writeObjectValueFromMethod("attackSimulationUser", attackSimulationSimulationUserCoverage.attackSimulationUser as any, serializeAttackSimulationUser);
            writer.writeNumberValue("clickCount", attackSimulationSimulationUserCoverage.clickCount);
            writer.writeNumberValue("compromisedCount", attackSimulationSimulationUserCoverage.compromisedCount);
            writer.writeDateValue("latestSimulationDateTime", attackSimulationSimulationUserCoverage.latestSimulationDateTime);
            writer.writeStringValue("@odata.type", attackSimulationSimulationUserCoverage.odataType);
            writer.writeNumberValue("simulationCount", attackSimulationSimulationUserCoverage.simulationCount);
}
