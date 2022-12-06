import {deserializeIntoExternalLink} from './deserializeIntoExternalLink';
import {SectionLinks} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionLinks(sectionLinks: SectionLinks | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { sectionLinks.odataType = n.getStringValue() as any ; },
        "oneNoteClientUrl": n => { sectionLinks.oneNoteClientUrl = n.getObject(deserializeIntoExternalLink) as any ; },
        "oneNoteWebUrl": n => { sectionLinks.oneNoteWebUrl = n.getObject(deserializeIntoExternalLink) as any ; },
    }
}
