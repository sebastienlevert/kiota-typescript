import {PreAuthorizedApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPreAuthorizedApplication(preAuthorizedApplication: PreAuthorizedApplication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { preAuthorizedApplication.appId = n.getStringValue() as any ; },
        "delegatedPermissionIds": n => { preAuthorizedApplication.delegatedPermissionIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { preAuthorizedApplication.odataType = n.getStringValue() as any ; },
    }
}
