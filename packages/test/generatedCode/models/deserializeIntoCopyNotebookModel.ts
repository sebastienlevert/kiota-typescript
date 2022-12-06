import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoNotebookLinks} from './deserializeIntoNotebookLinks';
import {CopyNotebookModel} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyNotebookModel(copyNotebookModel: CopyNotebookModel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "createdBy": n => { copyNotebookModel.createdBy = n.getStringValue() as any ; },
        "createdByIdentity": n => { copyNotebookModel.createdByIdentity = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdTime": n => { copyNotebookModel.createdTime = n.getDateValue() as any ; },
        "id": n => { copyNotebookModel.id = n.getStringValue() as any ; },
        "isDefault": n => { copyNotebookModel.isDefault = n.getBooleanValue() as any ; },
        "isShared": n => { copyNotebookModel.isShared = n.getBooleanValue() as any ; },
        "lastModifiedBy": n => { copyNotebookModel.lastModifiedBy = n.getStringValue() as any ; },
        "lastModifiedByIdentity": n => { copyNotebookModel.lastModifiedByIdentity = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedTime": n => { copyNotebookModel.lastModifiedTime = n.getDateValue() as any ; },
        "links": n => { copyNotebookModel.links = n.getObject(deserializeIntoNotebookLinks) as any ; },
        "name": n => { copyNotebookModel.name = n.getStringValue() as any ; },
        "@odata.type": n => { copyNotebookModel.odataType = n.getStringValue() as any ; },
        "sectionGroupsUrl": n => { copyNotebookModel.sectionGroupsUrl = n.getStringValue() as any ; },
        "sectionsUrl": n => { copyNotebookModel.sectionsUrl = n.getStringValue() as any ; },
        "self": n => { copyNotebookModel.self = n.getStringValue() as any ; },
        "userRole": n => { copyNotebookModel.userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole) as any ; },
    }
}
