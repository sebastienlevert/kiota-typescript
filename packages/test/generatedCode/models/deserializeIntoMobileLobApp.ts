import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {deserializeIntoMobileAppContent} from './deserializeIntoMobileAppContent';
import {MobileLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileLobApp(mobileLobApp: MobileLobApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(mobileLobApp),
        "committedContentVersion": n => { mobileLobApp.committedContentVersion = n.getStringValue() as any ; },
        "contentVersions": n => { mobileLobApp.contentVersions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppContent) as any ; },
        "fileName": n => { mobileLobApp.fileName = n.getStringValue() as any ; },
        "size": n => { mobileLobApp.size = n.getNumberValue() as any ; },
    }
}
