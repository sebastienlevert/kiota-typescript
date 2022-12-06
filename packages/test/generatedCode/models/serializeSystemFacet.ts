import {SystemFacet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSystemFacet(writer: SerializationWriter, systemFacet: SystemFacet | undefined = {}) : void {
            writer.writeStringValue("@odata.type", systemFacet.odataType);
}
