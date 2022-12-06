import {AssignedTrainingInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TrainingEventsContent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of assigned trainings and their information in an attack simulation and training campaign. */
    assignedTrainingsInfos?: AssignedTrainingInfo[];
    /** The OdataType property */
    odataType?: string;
    /** Number of users who were assigned trainings in an attack simulation and training campaign. */
    trainingsAssignedUserCount?: number;
}
