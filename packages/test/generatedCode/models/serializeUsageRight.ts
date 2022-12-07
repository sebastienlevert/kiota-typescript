import {UsageRight} from './index';
import {serializeEntity} from './serializeEntity';
import {UsageRightState} from './usageRightState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsageRight(writer: SerializationWriter, usageRight: UsageRight | undefined = {}) : void {
        serializeEntity(writer, usageRight)
            writer.writeStringValue("catalogId", usageRight.catalogId);
            writer.writeStringValue("serviceIdentifier", usageRight.serviceIdentifier);
            writer.writeEnumValue<UsageRightState>("state", usageRight.state);
}
