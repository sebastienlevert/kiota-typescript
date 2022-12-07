import {deserializeIntoColumnDefinition} from './deserializeIntoColumnDefinition';
import {deserializeIntoColumnLink} from './deserializeIntoColumnLink';
import {deserializeIntoContentTypeOrder} from './deserializeIntoContentTypeOrder';
import {deserializeIntoDocumentSet} from './deserializeIntoDocumentSet';
import {deserializeIntoDocumentSetContent} from './deserializeIntoDocumentSetContent';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoItemReference} from './deserializeIntoItemReference';
import {ContentType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentType(contentType: ContentType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contentType),
        "associatedHubsUrls": n => { contentType.associatedHubsUrls = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "base": n => { contentType.base = n.getObject(deserializeIntoContentType) as any ; },
        "baseTypes": n => { contentType.baseTypes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentType) as any ; },
        "columnLinks": n => { contentType.columnLinks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnLink) as any ; },
        "columnPositions": n => { contentType.columnPositions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
        "columns": n => { contentType.columns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoColumnDefinition) as any ; },
        "description": n => { contentType.description = n.getStringValue() as any ; },
        "documentSet": n => { contentType.documentSet = n.getObject(deserializeIntoDocumentSet) as any ; },
        "documentTemplate": n => { contentType.documentTemplate = n.getObject(deserializeIntoDocumentSetContent) as any ; },
        "group": n => { contentType.group = n.getStringValue() as any ; },
        "hidden": n => { contentType.hidden = n.getBooleanValue() as any ; },
        "inheritedFrom": n => { contentType.inheritedFrom = n.getObject(deserializeIntoItemReference) as any ; },
        "isBuiltIn": n => { contentType.isBuiltIn = n.getBooleanValue() as any ; },
        "name": n => { contentType.name = n.getStringValue() as any ; },
        "order": n => { contentType.order = n.getObject(deserializeIntoContentTypeOrder) as any ; },
        "parentId": n => { contentType.parentId = n.getStringValue() as any ; },
        "propagateChanges": n => { contentType.propagateChanges = n.getBooleanValue() as any ; },
        "readOnly": n => { contentType.readOnly = n.getBooleanValue() as any ; },
        "sealed": n => { contentType.sealed = n.getBooleanValue() as any ; },
    }
}
