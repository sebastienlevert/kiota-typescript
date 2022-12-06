import {AttachmentType} from './attachmentType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The type of attachment. Possible values are: file, item, reference. Required. */
    attachmentType?: AttachmentType;
    /** The CID or Content-Id of the attachment for referencing in case of in-line attachments using <img src='cid:contentId'> tag in HTML messages. Optional. */
    contentId?: string;
    /** The nature of the data in the attachment. Optional. */
    contentType?: string;
    /** true if the attachment is an inline attachment; otherwise, false. Optional. */
    isInline?: boolean;
    /** The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** The length of the attachment in bytes. Required. */
    size?: number;
}
