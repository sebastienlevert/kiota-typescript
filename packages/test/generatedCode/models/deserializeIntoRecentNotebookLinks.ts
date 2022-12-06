import {deserializeIntoExternalLink} from './deserializeIntoExternalLink';
import {RecentNotebookLinks} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecentNotebookLinks(recentNotebookLinks: RecentNotebookLinks | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { recentNotebookLinks.odataType = n.getStringValue() as any ; },
        "oneNoteClientUrl": n => { recentNotebookLinks.oneNoteClientUrl = n.getObject(deserializeIntoExternalLink) as any ; },
        "oneNoteWebUrl": n => { recentNotebookLinks.oneNoteWebUrl = n.getObject(deserializeIntoExternalLink) as any ; },
    }
}
