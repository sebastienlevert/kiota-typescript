import {Attachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FileAttachment extends Attachment, Partial<Parsable> {
    /** The base64-encoded contents of the file. */
    contentBytes?: string;
    /** The ID of the attachment in the Exchange store. */
    contentId?: string;
    /** Do not use this property as it is not supported. */
    contentLocation?: string;
}
