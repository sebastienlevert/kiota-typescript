import {Entity, PrinterDocumentConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintDocument extends Entity, Partial<Parsable> {
    /** The configuration property */
    configuration?: PrinterDocumentConfiguration;
    /** The document's content (MIME) type. Read-only. */
    contentType?: string;
    /** The document's name. Read-only. */
    displayName?: string;
    /** The downloadedDateTime property */
    downloadedDateTime?: Date;
    /** The document's size in bytes. Read-only. */
    size?: number;
    /** The uploadedDateTime property */
    uploadedDateTime?: Date;
}
