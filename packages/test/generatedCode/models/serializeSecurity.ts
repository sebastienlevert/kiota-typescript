import {Security} from './index';
import {serializeCasesRoot} from './security/serializeCasesRoot';
import {serializeAlert} from './serializeAlert';
import {serializeAttackSimulationRoot} from './serializeAttackSimulationRoot';
import {serializeEntity} from './serializeEntity';
import {serializeSecureScore} from './serializeSecureScore';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurity(writer: SerializationWriter, security: Security | undefined = {}) : void {
        serializeEntity(writer, security)
            writer.writeCollectionOfObjectValuesFromMethod("alerts", security.alerts as any, serializeAlert);
            writer.writeObjectValueFromMethod("attackSimulation", security.attackSimulation as any, serializeAttackSimulationRoot);
            writer.writeObjectValueFromMethod("cases", security.cases as any, serializeCasesRoot);
            writer.writeCollectionOfObjectValuesFromMethod("secureScoreControlProfiles", security.secureScoreControlProfiles as any, serializeSecureScoreControlProfile);
            writer.writeCollectionOfObjectValuesFromMethod("secureScores", security.secureScores as any, serializeSecureScore);
}
