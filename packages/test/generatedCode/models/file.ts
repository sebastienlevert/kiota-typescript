import {Hashes} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface File extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Hashes of the file's binary content, if available. Read-only. */
    hashes?: Hashes;
    /** The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only. */
    mimeType?: string;
    /** The OdataType property */
    odataType?: string;
    /** The processingMetadata property */
    processingMetadata?: boolean;
}
