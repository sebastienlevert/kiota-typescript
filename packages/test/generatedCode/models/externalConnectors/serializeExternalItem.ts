import {serializeEntity} from '../serializeEntity';
import {ExternalItem} from './index';
import {serializeAcl} from './serializeAcl';
import {serializeExternalItemContent} from './serializeExternalItemContent';
import {serializeProperties} from './serializeProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalItem(writer: SerializationWriter, externalItem: ExternalItem | undefined = {}) : void {
        serializeEntity(writer, externalItem)
            writer.writeCollectionOfObjectValuesFromMethod("acl", externalItem.acl as any, serializeAcl);
            writer.writeObjectValueFromMethod("content", externalItem.content as any, serializeExternalItemContent);
            writer.writeObjectValueFromMethod("properties", externalItem.properties as any, serializeProperties);
}
