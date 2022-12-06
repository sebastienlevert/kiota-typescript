import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMobileAppContentFile} from './deserializeIntoMobileAppContentFile';
import {MobileAppContent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppContent(mobileAppContent: MobileAppContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppContent),
        "files": n => { mobileAppContent.files = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppContentFile) as any ; },
    }
}
