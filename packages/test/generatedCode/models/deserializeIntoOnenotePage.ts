import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {deserializeIntoOnenoteEntitySchemaObjectModel} from './deserializeIntoOnenoteEntitySchemaObjectModel';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {deserializeIntoPageLinks} from './deserializeIntoPageLinks';
import {OnenotePage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePage(onenotePage: OnenotePage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntitySchemaObjectModel(onenotePage),
        "content": n => { onenotePage.content = n.getStringValue() as any ; },
        "contentUrl": n => { onenotePage.contentUrl = n.getStringValue() as any ; },
        "createdByAppId": n => { onenotePage.createdByAppId = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { onenotePage.lastModifiedDateTime = n.getDateValue() as any ; },
        "level": n => { onenotePage.level = n.getNumberValue() as any ; },
        "links": n => { onenotePage.links = n.getObject(deserializeIntoPageLinks) as any ; },
        "order": n => { onenotePage.order = n.getNumberValue() as any ; },
        "parentNotebook": n => { onenotePage.parentNotebook = n.getObject(deserializeIntoNotebook) as any ; },
        "parentSection": n => { onenotePage.parentSection = n.getObject(deserializeIntoOnenoteSection) as any ; },
        "title": n => { onenotePage.title = n.getStringValue() as any ; },
        "userTags": n => { onenotePage.userTags = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
