import {PreAuthorizedApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePreAuthorizedApplication(writer: SerializationWriter, preAuthorizedApplication: PreAuthorizedApplication | undefined = {}) : void {
            writer.writeStringValue("appId", preAuthorizedApplication.appId);
            writer.writeCollectionOfPrimitiveValues<string>("delegatedPermissionIds", preAuthorizedApplication.delegatedPermissionIds);
            writer.writeStringValue("@odata.type", preAuthorizedApplication.odataType);
}
