import {AttackSimulationUser, UserTrainingStatusInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationTrainingUserCoverage extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** User in an attack simulation and training campaign. */
    attackSimulationUser?: AttackSimulationUser;
    /** The OdataType property */
    odataType?: string;
    /** List of assigned trainings and their statuses for the user. */
    userTrainings?: UserTrainingStatusInfo[];
}
