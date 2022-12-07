import {SiteCollection} from './index';
import {serializeRoot} from './serializeRoot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteCollection(writer: SerializationWriter, siteCollection: SiteCollection | undefined = {}) : void {
            writer.writeStringValue("dataLocationCode", siteCollection.dataLocationCode);
            writer.writeStringValue("hostname", siteCollection.hostname);
            writer.writeObjectValueFromMethod("root", siteCollection.root as any, serializeRoot);
}
