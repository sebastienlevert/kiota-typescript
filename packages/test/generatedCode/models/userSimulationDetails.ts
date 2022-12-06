import {AttackSimulationUser, UserSimulationEventInfo, UserTrainingEventInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserSimulationDetails extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Number of trainings assigned to a user in an attack simulation and training campaign. */
    assignedTrainingsCount?: number;
    /** Number of trainings completed by a user in an attack simulation and training campaign. */
    completedTrainingsCount?: number;
    /** Date and time of the compromising online action by a user in an attack simulation and training campaign. */
    compromisedDateTime?: Date;
    /** Number of trainings in progress by a user in an attack simulation and training campaign. */
    inProgressTrainingsCount?: number;
    /** Indicates whether a user was compromised in an attack simulation and training campaign. */
    isCompromised?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** Date and time when a user reported the delivered payload as phishing in the attack simulation and training campaign. */
    reportedPhishDateTime?: Date;
    /** List of simulation events of a user in the attack simulation and training campaign. */
    simulationEvents?: UserSimulationEventInfo[];
    /** User in an attack simulation and training campaign. */
    simulationUser?: AttackSimulationUser;
    /** List of training events of a user in the attack simulation and training campaign. */
    trainingEvents?: UserTrainingEventInfo[];
}
