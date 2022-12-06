import {PublicClientApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicClientApplication(writer: SerializationWriter, publicClientApplication: PublicClientApplication | undefined = {}) : void {
            writer.writeStringValue("@odata.type", publicClientApplication.odataType);
            writer.writeCollectionOfPrimitiveValues<string>("redirectUris", publicClientApplication.redirectUris);
}
