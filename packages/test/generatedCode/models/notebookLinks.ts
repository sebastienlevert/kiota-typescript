import {ExternalLink} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface NotebookLinks extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The oneNoteClientUrl property */
    oneNoteClientUrl?: ExternalLink;
    /** The oneNoteWebUrl property */
    oneNoteWebUrl?: ExternalLink;
}
