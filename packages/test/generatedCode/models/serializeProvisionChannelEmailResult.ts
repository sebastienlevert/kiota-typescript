import {ProvisionChannelEmailResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisionChannelEmailResult(writer: SerializationWriter, provisionChannelEmailResult: ProvisionChannelEmailResult | undefined = {}) : void {
            writer.writeStringValue("email", provisionChannelEmailResult.email);
            writer.writeStringValue("@odata.type", provisionChannelEmailResult.odataType);
}
