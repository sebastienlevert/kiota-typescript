import {NotebookLinks} from './index';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotebookLinks(writer: SerializationWriter, notebookLinks: NotebookLinks | undefined = {}) : void {
            writer.writeObjectValueFromMethod("oneNoteClientUrl", notebookLinks.oneNoteClientUrl as any, serializeExternalLink);
            writer.writeObjectValueFromMethod("oneNoteWebUrl", notebookLinks.oneNoteWebUrl as any, serializeExternalLink);
}
