import {AttachmentType} from './attachmentType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attachmentType property */
    attachmentType?: AttachmentType;
    /** The contentType property */
    contentType?: string;
    /** The name property */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** The size property */
    size?: number;
}
