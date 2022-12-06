import {RequiredResourceAccess} from './index';
import {serializeResourceAccess} from './serializeResourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequiredResourceAccess(writer: SerializationWriter, requiredResourceAccess: RequiredResourceAccess | undefined = {}) : void {
            writer.writeStringValue("@odata.type", requiredResourceAccess.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("resourceAccess", requiredResourceAccess.resourceAccess as any, serializeResourceAccess);
            writer.writeStringValue("resourceAppId", requiredResourceAccess.resourceAppId);
}
