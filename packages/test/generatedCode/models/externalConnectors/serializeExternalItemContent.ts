import {ExternalItemContentType} from './externalItemContentType';
import {ExternalItemContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalItemContent(writer: SerializationWriter, externalItemContent: ExternalItemContent | undefined = {}) : void {
            writer.writeStringValue("@odata.type", externalItemContent.odataType);
            writer.writeEnumValue<ExternalItemContentType>("type", externalItemContent.type);
            writer.writeStringValue("value", externalItemContent.value);
}
