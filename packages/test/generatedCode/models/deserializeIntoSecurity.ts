import {deserializeIntoAlert} from './deserializeIntoAlert';
import {deserializeIntoAttackSimulationRoot} from './deserializeIntoAttackSimulationRoot';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSecureScore} from './deserializeIntoSecureScore';
import {deserializeIntoSecureScoreControlProfile} from './deserializeIntoSecureScoreControlProfile';
import {Security} from './index';
import {deserializeIntoCasesRoot} from './security/deserializeIntoCasesRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurity(security: Security | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(security),
        "alerts": n => { security.alerts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlert) as any ; },
        "attackSimulation": n => { security.attackSimulation = n.getObject(deserializeIntoAttackSimulationRoot) as any ; },
        "cases": n => { security.cases = n.getObject(deserializeIntoCasesRoot) as any ; },
        "secureScoreControlProfiles": n => { security.secureScoreControlProfiles = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecureScoreControlProfile) as any ; },
        "secureScores": n => { security.secureScores = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecureScore) as any ; },
    }
}
