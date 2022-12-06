import {AttackSimulationUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttackSimulationUser(writer: SerializationWriter, attackSimulationUser: AttackSimulationUser | undefined = {}) : void {
            writer.writeStringValue("displayName", attackSimulationUser.displayName);
            writer.writeStringValue("email", attackSimulationUser.email);
            writer.writeStringValue("@odata.type", attackSimulationUser.odataType);
            writer.writeStringValue("userId", attackSimulationUser.userId);
}
