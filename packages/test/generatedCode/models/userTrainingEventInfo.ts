import {UserTrainingContentEventInfo} from './index';
import {TrainingStatus} from './trainingStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserTrainingEventInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Display name of the training. */
    displayName?: string;
    /** Latest status of the training assigned to the user. Possible values are: unknown, assigned, inProgress, completed, overdue, unknownFutureValue. */
    latestTrainingStatus?: TrainingStatus;
    /** The OdataType property */
    odataType?: string;
    /** Event details of the training when it was assigned to the user. */
    trainingAssignedProperties?: UserTrainingContentEventInfo;
    /** Event details of the training when it was completed by the user. */
    trainingCompletedProperties?: UserTrainingContentEventInfo;
    /** Event details of the training when it was updated/in-progress by the user. */
    trainingUpdatedProperties?: UserTrainingContentEventInfo;
}
