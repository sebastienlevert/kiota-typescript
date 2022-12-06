import {ResourceAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceAction(writer: SerializationWriter, resourceAction: ResourceAction | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", resourceAction.allowedResourceActions);
            writer.writeCollectionOfPrimitiveValues<string>("notAllowedResourceActions", resourceAction.notAllowedResourceActions);
            writer.writeStringValue("@odata.type", resourceAction.odataType);
}
