import {AttackSimulationRepeatOffender} from './index';
import {serializeAttackSimulationUser} from './serializeAttackSimulationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationRepeatOffender(writer: SerializationWriter, attackSimulationRepeatOffender: AttackSimulationRepeatOffender | undefined = {}) : void {
            writer.writeObjectValueFromMethod("attackSimulationUser", attackSimulationRepeatOffender.attackSimulationUser as any, serializeAttackSimulationUser);
            writer.writeStringValue("@odata.type", attackSimulationRepeatOffender.odataType);
            writer.writeNumberValue("repeatOffenceCount", attackSimulationRepeatOffender.repeatOffenceCount);
}
