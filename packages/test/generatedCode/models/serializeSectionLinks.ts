import {SectionLinks} from './index';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSectionLinks(writer: SerializationWriter, sectionLinks: SectionLinks | undefined = {}) : void {
            writer.writeObjectValueFromMethod("oneNoteClientUrl", sectionLinks.oneNoteClientUrl as any, serializeExternalLink);
            writer.writeObjectValueFromMethod("oneNoteWebUrl", sectionLinks.oneNoteWebUrl as any, serializeExternalLink);
}
