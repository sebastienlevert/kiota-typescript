import {CallOptions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallOptions(writer: SerializationWriter, callOptions: CallOptions | undefined = {}) : void {
            writer.writeBooleanValue("hideBotAfterEscalation", callOptions.hideBotAfterEscalation);
            writer.writeBooleanValue("isContentSharingNotificationEnabled", callOptions.isContentSharingNotificationEnabled);
            writer.writeStringValue("@odata.type", callOptions.odataType);
}
