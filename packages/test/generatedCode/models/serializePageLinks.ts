import {PageLinks} from './index';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePageLinks(writer: SerializationWriter, pageLinks: PageLinks | undefined = {}) : void {
            writer.writeObjectValueFromMethod("oneNoteClientUrl", pageLinks.oneNoteClientUrl as any, serializeExternalLink);
            writer.writeObjectValueFromMethod("oneNoteWebUrl", pageLinks.oneNoteWebUrl as any, serializeExternalLink);
}
