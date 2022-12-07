import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {deserializeIntoOnenoteOperation} from './deserializeIntoOnenoteOperation';
import {deserializeIntoOnenotePage} from './deserializeIntoOnenotePage';
import {deserializeIntoOnenoteResource} from './deserializeIntoOnenoteResource';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {Onenote} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenote(onenote: Onenote | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onenote),
        "notebooks": n => { onenote.notebooks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNotebook) as any ; },
        "operations": n => { onenote.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteOperation) as any ; },
        "pages": n => { onenote.pages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenotePage) as any ; },
        "resources": n => { onenote.resources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteResource) as any ; },
        "sectionGroups": n => { onenote.sectionGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSectionGroup) as any ; },
        "sections": n => { onenote.sections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteSection) as any ; },
    }
}
