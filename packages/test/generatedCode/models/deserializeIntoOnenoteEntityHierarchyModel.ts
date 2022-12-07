import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoOnenoteEntitySchemaObjectModel} from './deserializeIntoOnenoteEntitySchemaObjectModel';
import {OnenoteEntityHierarchyModel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntityHierarchyModel(onenoteEntityHierarchyModel: OnenoteEntityHierarchyModel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntitySchemaObjectModel(onenoteEntityHierarchyModel),
        "createdBy": n => { onenoteEntityHierarchyModel.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "displayName": n => { onenoteEntityHierarchyModel.displayName = n.getStringValue() as any ; },
        "lastModifiedBy": n => { onenoteEntityHierarchyModel.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { onenoteEntityHierarchyModel.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
