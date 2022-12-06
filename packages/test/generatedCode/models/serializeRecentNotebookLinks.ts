import {RecentNotebookLinks} from './index';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecentNotebookLinks(writer: SerializationWriter, recentNotebookLinks: RecentNotebookLinks | undefined = {}) : void {
            writer.writeStringValue("@odata.type", recentNotebookLinks.odataType);
            writer.writeObjectValueFromMethod("oneNoteClientUrl", recentNotebookLinks.oneNoteClientUrl as any, serializeExternalLink);
            writer.writeObjectValueFromMethod("oneNoteWebUrl", recentNotebookLinks.oneNoteWebUrl as any, serializeExternalLink);
}
