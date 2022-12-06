import {Configuration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfiguration(writer: SerializationWriter, configuration: Configuration | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("authorizedAppIds", configuration.authorizedAppIds);
            writer.writeStringValue("@odata.type", configuration.odataType);
}
