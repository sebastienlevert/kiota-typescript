import {AlertFeedback} from './alertFeedback';
import {AlertStatus} from './alertStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertHistoryState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The appId property */
    appId?: string;
    /** The assignedTo property */
    assignedTo?: string;
    /** The comments property */
    comments?: string[];
    /** The feedback property */
    feedback?: AlertFeedback;
    /** The OdataType property */
    odataType?: string;
    /** The status property */
    status?: AlertStatus;
    /** The updatedDateTime property */
    updatedDateTime?: Date;
    /** The user property */
    user?: string;
}
