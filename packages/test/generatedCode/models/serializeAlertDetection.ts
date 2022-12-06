import {AlertDetection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertDetection(writer: SerializationWriter, alertDetection: AlertDetection | undefined = {}) : void {
            writer.writeStringValue("detectionType", alertDetection.detectionType);
            writer.writeStringValue("method", alertDetection.method);
            writer.writeStringValue("name", alertDetection.name);
            writer.writeStringValue("@odata.type", alertDetection.odataType);
}
