import {AlertTrigger} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertTrigger(writer: SerializationWriter, alertTrigger: AlertTrigger | undefined = {}) : void {
            writer.writeStringValue("name", alertTrigger.name);
            writer.writeStringValue("@odata.type", alertTrigger.odataType);
            writer.writeStringValue("type", alertTrigger.type);
            writer.writeStringValue("value", alertTrigger.value);
}
