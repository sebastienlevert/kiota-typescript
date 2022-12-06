import {ResourceAccess} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceAccess(writer: SerializationWriter, resourceAccess: ResourceAccess | undefined = {}) : void {
            writer.writeStringValue("id", resourceAccess.id);
            writer.writeStringValue("@odata.type", resourceAccess.odataType);
            writer.writeStringValue("type", resourceAccess.type);
}
