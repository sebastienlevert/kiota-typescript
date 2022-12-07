import {ExternalLink} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalLink(externalLink: ExternalLink | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "href": n => { externalLink.href = n.getStringValue() as any ; },
    }
}
