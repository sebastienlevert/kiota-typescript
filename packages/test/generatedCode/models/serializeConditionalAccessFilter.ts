import {FilterMode} from './filterMode';
import {ConditionalAccessFilter} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessFilter(writer: SerializationWriter, conditionalAccessFilter: ConditionalAccessFilter | undefined = {}) : void {
            writer.writeEnumValue<FilterMode>("mode", conditionalAccessFilter.mode);
            writer.writeStringValue("@odata.type", conditionalAccessFilter.odataType);
            writer.writeStringValue("rule", conditionalAccessFilter.rule);
}
