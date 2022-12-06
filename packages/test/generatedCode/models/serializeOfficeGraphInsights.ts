import {OfficeGraphInsights} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeSharedInsight} from './serializeSharedInsight';
import {serializeTrending} from './serializeTrending';
import {serializeUsedInsight} from './serializeUsedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOfficeGraphInsights(writer: SerializationWriter, officeGraphInsights: OfficeGraphInsights | undefined = {}) : void {
        serializeEntity(writer, officeGraphInsights)
            writer.writeCollectionOfObjectValuesFromMethod("shared", officeGraphInsights.shared as any, serializeSharedInsight);
            writer.writeCollectionOfObjectValuesFromMethod("trending", officeGraphInsights.trending as any, serializeTrending);
            writer.writeCollectionOfObjectValuesFromMethod("used", officeGraphInsights.used as any, serializeUsedInsight);
}
