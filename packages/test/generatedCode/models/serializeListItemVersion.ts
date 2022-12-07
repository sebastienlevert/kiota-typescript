import {ListItemVersion} from './index';
import {serializeBaseItemVersion} from './serializeBaseItemVersion';
import {serializeFieldValueSet} from './serializeFieldValueSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItemVersion(writer: SerializationWriter, listItemVersion: ListItemVersion | undefined = {}) : void {
        serializeBaseItemVersion(writer, listItemVersion)
            writer.writeObjectValueFromMethod("fields", listItemVersion.fields as any, serializeFieldValueSet);
}
