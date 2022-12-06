import {AlterationResponse} from './index';
import {SearchAlterationType} from './searchAlterationType';
import {serializeSearchAlteration} from './serializeSearchAlteration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlterationResponse(writer: SerializationWriter, alterationResponse: AlterationResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.type", alterationResponse.odataType);
            writer.writeStringValue("originalQueryString", alterationResponse.originalQueryString);
            writer.writeObjectValueFromMethod("queryAlteration", alterationResponse.queryAlteration as any, serializeSearchAlteration);
            writer.writeEnumValue<SearchAlterationType>("queryAlterationType", alterationResponse.queryAlterationType);
}
