import {ProvisioningStatusErrorCategory} from './provisioningStatusErrorCategory';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningErrorInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Additional details in case of error. */
    additionalDetails?: string;
    /** Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue */
    errorCategory?: ProvisioningStatusErrorCategory;
    /** Unique error code if any occurred. Learn more */
    errorCode?: string;
    /** The OdataType property */
    odataType?: string;
    /** Summarizes the status and describes why the status happened. */
    reason?: string;
    /** Provides the resolution for the corresponding error. */
    recommendedAction?: string;
}
