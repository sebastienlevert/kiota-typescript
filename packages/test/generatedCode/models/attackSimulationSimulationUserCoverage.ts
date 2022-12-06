import {AttackSimulationUser} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationSimulationUserCoverage extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** User in an attack simulation and training campaign. */
    attackSimulationUser?: AttackSimulationUser;
    /** Number of link clicks in the received payloads by the user in attack simulation and training campaigns. */
    clickCount?: number;
    /** Number of compromising actions by the user in attack simulation and training campaigns. */
    compromisedCount?: number;
    /** Date and time of the latest attack simulation and training campaign that the user was included in. */
    latestSimulationDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** Number of attack simulation and training campaigns that the user was included in. */
    simulationCount?: number;
}
