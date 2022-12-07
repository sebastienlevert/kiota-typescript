import {ContentTypeInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetContent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The contentType property */
    contentType?: ContentTypeInfo;
    /** Name of the file in resource folder that should be added as a default content or a template in the document set */
    fileName?: string;
    /** Folder name in which the file will be placed when a new document set is created in the library. */
    folderName?: string;
}
