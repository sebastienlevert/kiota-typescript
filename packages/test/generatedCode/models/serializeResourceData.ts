import {ResourceData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceData(writer: SerializationWriter, resourceData: ResourceData | undefined = {}) : void {
            writer.writeStringValue("@odata.type", resourceData.odataType);
}
