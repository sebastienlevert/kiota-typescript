import {ServiceInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceInformation(writer: SerializationWriter, serviceInformation: ServiceInformation | undefined = {}) : void {
            writer.writeStringValue("name", serviceInformation.name);
            writer.writeStringValue("webUrl", serviceInformation.webUrl);
}
