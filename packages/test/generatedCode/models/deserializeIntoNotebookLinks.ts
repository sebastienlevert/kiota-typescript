import {deserializeIntoExternalLink} from './deserializeIntoExternalLink';
import {NotebookLinks} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotebookLinks(notebookLinks: NotebookLinks | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "oneNoteClientUrl": n => { notebookLinks.oneNoteClientUrl = n.getObject(deserializeIntoExternalLink) as any ; },
        "oneNoteWebUrl": n => { notebookLinks.oneNoteWebUrl = n.getObject(deserializeIntoExternalLink) as any ; },
    }
}
