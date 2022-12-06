import {deserializeIntoRecentNotebookLinks} from './deserializeIntoRecentNotebookLinks';
import {RecentNotebook} from './index';
import {OnenoteSourceService} from './onenoteSourceService';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecentNotebook(recentNotebook: RecentNotebook | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { recentNotebook.displayName = n.getStringValue() as any ; },
        "lastAccessedTime": n => { recentNotebook.lastAccessedTime = n.getDateValue() as any ; },
        "links": n => { recentNotebook.links = n.getObject(deserializeIntoRecentNotebookLinks) as any ; },
        "@odata.type": n => { recentNotebook.odataType = n.getStringValue() as any ; },
        "sourceService": n => { recentNotebook.sourceService = n.getEnumValue<OnenoteSourceService>(OnenoteSourceService) as any ; },
    }
}
