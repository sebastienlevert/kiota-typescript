import {ExpirationPatternType} from './expirationPatternType';
import {ExpirationPattern} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExpirationPattern(writer: SerializationWriter, expirationPattern: ExpirationPattern | undefined = {}) : void {
            writer.writeDurationValue("duration", expirationPattern.duration);
            writer.writeDateValue("endDateTime", expirationPattern.endDateTime);
            writer.writeStringValue("@odata.type", expirationPattern.odataType);
            writer.writeEnumValue<ExpirationPatternType>("type", expirationPattern.type);
}
