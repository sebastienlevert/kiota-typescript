import {ChangeType} from './changeType';
import {CommsNotification} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommsNotification(writer: SerializationWriter, commsNotification: CommsNotification | undefined = {}) : void {
            writer.writeEnumValue<ChangeType>("changeType", commsNotification.changeType);
            writer.writeStringValue("@odata.type", commsNotification.odataType);
            writer.writeStringValue("resourceUrl", commsNotification.resourceUrl);
}
