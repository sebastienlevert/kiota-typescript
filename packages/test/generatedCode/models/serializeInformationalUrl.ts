import {InformationalUrl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationalUrl(writer: SerializationWriter, informationalUrl: InformationalUrl | undefined = {}) : void {
            writer.writeStringValue("logoUrl", informationalUrl.logoUrl);
            writer.writeStringValue("marketingUrl", informationalUrl.marketingUrl);
            writer.writeStringValue("privacyStatementUrl", informationalUrl.privacyStatementUrl);
            writer.writeStringValue("supportUrl", informationalUrl.supportUrl);
            writer.writeStringValue("termsOfServiceUrl", informationalUrl.termsOfServiceUrl);
}
