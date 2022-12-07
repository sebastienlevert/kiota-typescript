import {deserializeIntoExternalLink} from './deserializeIntoExternalLink';
import {PageLinks} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPageLinks(pageLinks: PageLinks | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "oneNoteClientUrl": n => { pageLinks.oneNoteClientUrl = n.getObject(deserializeIntoExternalLink) as any ; },
        "oneNoteWebUrl": n => { pageLinks.oneNoteWebUrl = n.getObject(deserializeIntoExternalLink) as any ; },
    }
}
