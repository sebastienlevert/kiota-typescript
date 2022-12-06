import {ContentType} from './index';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeColumnLink} from './serializeColumnLink';
import {serializeContentTypeOrder} from './serializeContentTypeOrder';
import {serializeDocumentSet} from './serializeDocumentSet';
import {serializeDocumentSetContent} from './serializeDocumentSetContent';
import {serializeEntity} from './serializeEntity';
import {serializeItemReference} from './serializeItemReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentType(writer: SerializationWriter, contentType: ContentType | undefined = {}) : void {
        serializeEntity(writer, contentType)
            writer.writeCollectionOfPrimitiveValues<string>("associatedHubsUrls", contentType.associatedHubsUrls);
            writer.writeObjectValueFromMethod("base", contentType.base as any, serializeContentType);
            writer.writeCollectionOfObjectValuesFromMethod("baseTypes", contentType.baseTypes as any, serializeContentType);
            writer.writeCollectionOfObjectValuesFromMethod("columnLinks", contentType.columnLinks as any, serializeColumnLink);
            writer.writeCollectionOfObjectValuesFromMethod("columnPositions", contentType.columnPositions as any, serializeColumnDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("columns", contentType.columns as any, serializeColumnDefinition);
            writer.writeStringValue("description", contentType.description);
            writer.writeObjectValueFromMethod("documentSet", contentType.documentSet as any, serializeDocumentSet);
            writer.writeObjectValueFromMethod("documentTemplate", contentType.documentTemplate as any, serializeDocumentSetContent);
            writer.writeStringValue("group", contentType.group);
            writer.writeBooleanValue("hidden", contentType.hidden);
            writer.writeObjectValueFromMethod("inheritedFrom", contentType.inheritedFrom as any, serializeItemReference);
            writer.writeBooleanValue("isBuiltIn", contentType.isBuiltIn);
            writer.writeStringValue("name", contentType.name);
            writer.writeObjectValueFromMethod("order", contentType.order as any, serializeContentTypeOrder);
            writer.writeStringValue("parentId", contentType.parentId);
            writer.writeBooleanValue("propagateChanges", contentType.propagateChanges);
            writer.writeBooleanValue("readOnly", contentType.readOnly);
            writer.writeBooleanValue("sealed", contentType.sealed);
}
