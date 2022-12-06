import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserTrainingStatusInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Date and time of assignment of the training to the user. */
    assignedDateTime?: Date;
    /** Date and time of completion of the training by the user. */
    completionDateTime?: Date;
    /** Display name of the assigned training. */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
    /** The status of the training assigned to the user. Possible values are: unknown, assigned, inProgress, completed, overdue, unknownFutureValue. */
    trainingStatus?: TrainingStatus;
}
