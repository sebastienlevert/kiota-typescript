import {ChangeType} from './changeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CommsNotification extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The changeType property */
    changeType?: ChangeType;
    /** The OdataType property */
    odataType?: string;
    /** URI of the resource that was changed. */
    resourceUrl?: string;
}
