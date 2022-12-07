import {AutoLabeling} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAutoLabeling(writer: SerializationWriter, autoLabeling: AutoLabeling | undefined = {}) : void {
            writer.writeStringValue("message", autoLabeling.message);
            writer.writeCollectionOfPrimitiveValues<string>("sensitiveTypeIds", autoLabeling.sensitiveTypeIds);
}
