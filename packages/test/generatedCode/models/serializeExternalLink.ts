import {ExternalLink} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalLink(writer: SerializationWriter, externalLink: ExternalLink | undefined = {}) : void {
            writer.writeStringValue("href", externalLink.href);
}
