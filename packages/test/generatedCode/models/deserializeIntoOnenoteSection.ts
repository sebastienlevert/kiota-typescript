import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {deserializeIntoOnenotePage} from './deserializeIntoOnenotePage';
import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {deserializeIntoSectionLinks} from './deserializeIntoSectionLinks';
import {OnenoteSection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteSection(onenoteSection: OnenoteSection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityHierarchyModel(onenoteSection),
        "isDefault": n => { onenoteSection.isDefault = n.getBooleanValue() as any ; },
        "links": n => { onenoteSection.links = n.getObject(deserializeIntoSectionLinks) as any ; },
        "pages": n => { onenoteSection.pages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenotePage) as any ; },
        "pagesUrl": n => { onenoteSection.pagesUrl = n.getStringValue() as any ; },
        "parentNotebook": n => { onenoteSection.parentNotebook = n.getObject(deserializeIntoNotebook) as any ; },
        "parentSectionGroup": n => { onenoteSection.parentSectionGroup = n.getObject(deserializeIntoSectionGroup) as any ; },
    }
}
