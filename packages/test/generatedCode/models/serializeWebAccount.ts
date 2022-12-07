import {WebAccount} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {serializeServiceInformation} from './serializeServiceInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebAccount(writer: SerializationWriter, webAccount: WebAccount | undefined = {}) : void {
        serializeItemFacet(writer, webAccount)
            writer.writeStringValue("description", webAccount.description);
            writer.writeObjectValueFromMethod("service", webAccount.service as any, serializeServiceInformation);
            writer.writeStringValue("statusMessage", webAccount.statusMessage);
            writer.writeStringValue("thumbnailUrl", webAccount.thumbnailUrl);
            writer.writeStringValue("userId", webAccount.userId);
            writer.writeStringValue("webUrl", webAccount.webUrl);
}
