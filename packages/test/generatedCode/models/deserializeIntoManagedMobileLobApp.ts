import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {deserializeIntoMobileAppContent} from './deserializeIntoMobileAppContent';
import {ManagedMobileLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileLobApp(managedMobileLobApp: ManagedMobileLobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedApp(managedMobileLobApp),
        "committedContentVersion": n => { managedMobileLobApp.committedContentVersion = n.getStringValue() as any ; },
        "contentVersions": n => { managedMobileLobApp.contentVersions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppContent) as any ; },
        "fileName": n => { managedMobileLobApp.fileName = n.getStringValue() as any ; },
        "size": n => { managedMobileLobApp.size = n.getNumberValue() as any ; },
    }
}
