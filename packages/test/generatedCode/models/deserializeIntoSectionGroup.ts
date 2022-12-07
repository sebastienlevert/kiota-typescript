import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {SectionGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSectionGroup(sectionGroup: SectionGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityHierarchyModel(sectionGroup),
        "parentNotebook": n => { sectionGroup.parentNotebook = n.getObject(deserializeIntoNotebook) as any ; },
        "parentSectionGroup": n => { sectionGroup.parentSectionGroup = n.getObject(deserializeIntoSectionGroup) as any ; },
        "sectionGroups": n => { sectionGroup.sectionGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSectionGroup) as any ; },
        "sectionGroupsUrl": n => { sectionGroup.sectionGroupsUrl = n.getStringValue() as any ; },
        "sections": n => { sectionGroup.sections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteSection) as any ; },
        "sectionsUrl": n => { sectionGroup.sectionsUrl = n.getStringValue() as any ; },
    }
}
