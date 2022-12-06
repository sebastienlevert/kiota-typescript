import {deserializeIntoNotebookLinks} from './deserializeIntoNotebookLinks';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {Notebook} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotebook(notebook: Notebook | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityHierarchyModel(notebook),
        "isDefault": n => { notebook.isDefault = n.getBooleanValue() as any ; },
        "isShared": n => { notebook.isShared = n.getBooleanValue() as any ; },
        "links": n => { notebook.links = n.getObject(deserializeIntoNotebookLinks) as any ; },
        "sectionGroups": n => { notebook.sectionGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSectionGroup) as any ; },
        "sectionGroupsUrl": n => { notebook.sectionGroupsUrl = n.getStringValue() as any ; },
        "sections": n => { notebook.sections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteSection) as any ; },
        "sectionsUrl": n => { notebook.sectionsUrl = n.getStringValue() as any ; },
        "userRole": n => { notebook.userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole) as any ; },
    }
}
