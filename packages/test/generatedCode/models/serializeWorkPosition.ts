import {WorkPosition} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {serializePositionDetail} from './serializePositionDetail';
import {serializeRelatedPerson} from './serializeRelatedPerson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkPosition(writer: SerializationWriter, workPosition: WorkPosition | undefined = {}) : void {
        serializeItemFacet(writer, workPosition)
            writer.writeCollectionOfPrimitiveValues<string>("categories", workPosition.categories);
            writer.writeCollectionOfObjectValuesFromMethod("colleagues", workPosition.colleagues as any, serializeRelatedPerson);
            writer.writeObjectValueFromMethod("detail", workPosition.detail as any, serializePositionDetail);
            writer.writeBooleanValue("isCurrent", workPosition.isCurrent);
            writer.writeObjectValueFromMethod("manager", workPosition.manager as any, serializeRelatedPerson);
}
