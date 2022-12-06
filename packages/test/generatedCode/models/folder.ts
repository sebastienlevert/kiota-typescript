import {FolderView} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Folder extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Number of children contained immediately within this container. */
    childCount?: number;
    /** The OdataType property */
    odataType?: string;
    /** A collection of properties defining the recommended view for the folder. */
    view?: FolderView;
}
