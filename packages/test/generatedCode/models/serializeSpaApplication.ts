import {SpaApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSpaApplication(writer: SerializationWriter, spaApplication: SpaApplication | undefined = {}) : void {
            writer.writeStringValue("@odata.type", spaApplication.odataType);
            writer.writeCollectionOfPrimitiveValues<string>("redirectUris", spaApplication.redirectUris);
}
