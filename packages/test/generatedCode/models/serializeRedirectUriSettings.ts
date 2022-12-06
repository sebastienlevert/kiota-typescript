import {RedirectUriSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRedirectUriSettings(writer: SerializationWriter, redirectUriSettings: RedirectUriSettings | undefined = {}) : void {
            writer.writeNumberValue("index", redirectUriSettings.index);
            writer.writeStringValue("@odata.type", redirectUriSettings.odataType);
            writer.writeStringValue("uri", redirectUriSettings.uri);
}
