import {ItemInsights} from './index';
import {serializeOfficeGraphInsights} from './serializeOfficeGraphInsights';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemInsights(writer: SerializationWriter, itemInsights: ItemInsights | undefined = {}) : void {
        serializeOfficeGraphInsights(writer, itemInsights)
}
