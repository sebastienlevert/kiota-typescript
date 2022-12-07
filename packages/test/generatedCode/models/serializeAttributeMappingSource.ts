import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {AttributeMappingSource} from './index';
import {serializeStringKeyAttributeMappingSourceValuePair} from './serializeStringKeyAttributeMappingSourceValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMappingSource(writer: SerializationWriter, attributeMappingSource: AttributeMappingSource | undefined = {}) : void {
            writer.writeStringValue("expression", attributeMappingSource.expression);
            writer.writeStringValue("name", attributeMappingSource.name);
            writer.writeCollectionOfObjectValuesFromMethod("parameters", attributeMappingSource.parameters as any, serializeStringKeyAttributeMappingSourceValuePair);
            writer.writeEnumValue<AttributeMappingSourceType>("type", attributeMappingSource.type);
}
