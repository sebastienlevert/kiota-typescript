import {WindowsInformationProtectionResourceCollection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionResourceCollection(windowsInformationProtectionResourceCollection: WindowsInformationProtectionResourceCollection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionResourceCollection.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { windowsInformationProtectionResourceCollection.odataType = n.getStringValue() as any ; },
        "resources": n => { windowsInformationProtectionResourceCollection.resources = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
