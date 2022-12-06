import {Properties} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProperties(writer: SerializationWriter, properties: Properties | undefined = {}) : void {
            writer.writeStringValue("@odata.type", properties.odataType);
}
