import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {ExtensionProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionProperty(extensionProperty: ExtensionProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(extensionProperty),
        "appDisplayName": n => { extensionProperty.appDisplayName = n.getStringValue() as any ; },
        "dataType": n => { extensionProperty.dataType = n.getStringValue() as any ; },
        "isSyncedFromOnPremises": n => { extensionProperty.isSyncedFromOnPremises = n.getBooleanValue() as any ; },
        "name": n => { extensionProperty.name = n.getStringValue() as any ; },
        "targetObjects": n => { extensionProperty.targetObjects = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
