import {OnenotePage} from './index';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteEntitySchemaObjectModel} from './serializeOnenoteEntitySchemaObjectModel';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializePageLinks} from './serializePageLinks';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePage(writer: SerializationWriter, onenotePage: OnenotePage | undefined = {}) : void {
        serializeOnenoteEntitySchemaObjectModel(writer, onenotePage)
            writer.writeStringValue("content", onenotePage.content);
            writer.writeStringValue("contentUrl", onenotePage.contentUrl);
            writer.writeStringValue("createdByAppId", onenotePage.createdByAppId);
            writer.writeDateValue("lastModifiedDateTime", onenotePage.lastModifiedDateTime);
            writer.writeNumberValue("level", onenotePage.level);
            writer.writeObjectValueFromMethod("links", onenotePage.links as any, serializePageLinks);
            writer.writeNumberValue("order", onenotePage.order);
            writer.writeObjectValueFromMethod("parentNotebook", onenotePage.parentNotebook as any, serializeNotebook);
            writer.writeObjectValueFromMethod("parentSection", onenotePage.parentSection as any, serializeOnenoteSection);
            writer.writeStringValue("title", onenotePage.title);
            writer.writeCollectionOfPrimitiveValues<string>("userTags", onenotePage.userTags);
}
