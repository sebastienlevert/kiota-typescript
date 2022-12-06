import {Alert, AttackSimulationRoot, Entity, SecureScore, SecureScoreControlProfile} from './index';
import {CasesRoot} from './security/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Security extends Entity, Partial<Parsable> {
    /** The alerts property */
    alerts?: Alert[];
    /** The attackSimulation property */
    attackSimulation?: AttackSimulationRoot;
    /** The cases property */
    cases?: CasesRoot;
    /** The secureScoreControlProfiles property */
    secureScoreControlProfiles?: SecureScoreControlProfile[];
    /** The secureScores property */
    secureScores?: SecureScore[];
}
