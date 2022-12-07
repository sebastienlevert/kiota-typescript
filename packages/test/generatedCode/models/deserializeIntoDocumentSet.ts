import {deserializeIntoColumnDefinition} from './deserializeIntoColumnDefinition';
import {deserializeIntoContentTypeInfo} from './deserializeIntoContentTypeInfo';
import {deserializeIntoDocumentSetContent} from './deserializeIntoDocumentSetContent';
import {DocumentSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSet(documentSet: DocumentSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedContentTypes": n => { documentSet.allowedContentTypes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentTypeInfo) as any ; },
        "defaultContents": n => { documentSet.defaultContents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDocumentSetContent) as any ; },
        "propagateWelcomePageChanges": n => { documentSet.propagateWelcomePageChanges = n.getBooleanValue() as any ; },
        "sharedColumns": n => { documentSet.sharedColumns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
        "shouldPrefixNameToFile": n => { documentSet.shouldPrefixNameToFile = n.getBooleanValue() as any ; },
        "welcomePageColumns": n => { documentSet.welcomePageColumns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
        "welcomePageUrl": n => { documentSet.welcomePageUrl = n.getStringValue() as any ; },
    }
}
