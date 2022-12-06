import {FileSystemInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemUploadableProperties extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Provides a user-visible description of the item. Read-write. Only on OneDrive Personal. */
    description?: string;
    /** Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal. */
    fileSize?: number;
    /** File system information on client. Read-write. */
    fileSystemInfo?: FileSystemInfo;
    /** The name of the item (filename and extension). Read-write. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
}
