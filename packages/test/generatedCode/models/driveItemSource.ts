import {DriveItemSourceApplication} from './driveItemSourceApplication';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemSource extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The application property */
    application?: DriveItemSourceApplication;
    /** The external identifier for the drive item from the source. */
    externalId?: string;
}
