import {ResourceAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceAction(resourceAction: ResourceAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedResourceActions": n => { resourceAction.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "notAllowedResourceActions": n => { resourceAction.notAllowedResourceActions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { resourceAction.odataType = n.getStringValue() as any ; },
    }
}
