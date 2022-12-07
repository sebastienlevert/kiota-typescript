import {DocumentSet} from './index';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {serializeDocumentSetContent} from './serializeDocumentSetContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSet(writer: SerializationWriter, documentSet: DocumentSet | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("allowedContentTypes", documentSet.allowedContentTypes as any, serializeContentTypeInfo);
            writer.writeCollectionOfObjectValuesFromMethod("defaultContents", documentSet.defaultContents as any, serializeDocumentSetContent);
            writer.writeBooleanValue("propagateWelcomePageChanges", documentSet.propagateWelcomePageChanges);
            writer.writeCollectionOfObjectValuesFromMethod("sharedColumns", documentSet.sharedColumns as any, serializeColumnDefinition);
            writer.writeBooleanValue("shouldPrefixNameToFile", documentSet.shouldPrefixNameToFile);
            writer.writeCollectionOfObjectValuesFromMethod("welcomePageColumns", documentSet.welcomePageColumns as any, serializeColumnDefinition);
            writer.writeStringValue("welcomePageUrl", documentSet.welcomePageUrl);
}
