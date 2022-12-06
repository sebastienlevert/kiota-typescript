import {OmaSetting} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSetting(writer: SerializationWriter, omaSetting: OmaSetting | undefined = {}) : void {
            writer.writeStringValue("description", omaSetting.description);
            writer.writeStringValue("displayName", omaSetting.displayName);
            writer.writeStringValue("@odata.type", omaSetting.odataType);
            writer.writeStringValue("omaUri", omaSetting.omaUri);
}
