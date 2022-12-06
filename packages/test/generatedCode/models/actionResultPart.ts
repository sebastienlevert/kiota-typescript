import {PublicError} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ActionResultPart extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error that occurred, if any, during the course of the bulk operation. */
    error_escaped?: PublicError;
    /** The OdataType property */
    odataType?: string;
}
