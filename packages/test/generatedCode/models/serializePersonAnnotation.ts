import {PersonAnnotation} from './index';
import {serializeItemBody} from './serializeItemBody';
import {serializeItemFacet} from './serializeItemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonAnnotation(writer: SerializationWriter, personAnnotation: PersonAnnotation | undefined = {}) : void {
        serializeItemFacet(writer, personAnnotation)
            writer.writeObjectValueFromMethod("detail", personAnnotation.detail as any, serializeItemBody);
            writer.writeStringValue("displayName", personAnnotation.displayName);
            writer.writeStringValue("thumbnailUrl", personAnnotation.thumbnailUrl);
}
