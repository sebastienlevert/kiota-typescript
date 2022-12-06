import {RecentNotebookLinks} from './index';
import {OnenoteSourceService} from './onenoteSourceService';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecentNotebook extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the notebook. */
    displayName?: string;
    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    lastAccessedTime?: Date;
    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web. */
    links?: RecentNotebookLinks;
    /** The OdataType property */
    odataType?: string;
    /** The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive. */
    sourceService?: OnenoteSourceService;
}
