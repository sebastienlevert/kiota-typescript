import {ColumnLink} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnLink(writer: SerializationWriter, columnLink: ColumnLink | undefined = {}) : void {
        serializeEntity(writer, columnLink)
            writer.writeStringValue("name", columnLink.name);
}
