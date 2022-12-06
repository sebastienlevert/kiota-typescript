import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {ExcludeTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExcludeTarget(writer: SerializationWriter, excludeTarget: ExcludeTarget | undefined = {}) : void {
            writer.writeStringValue("id", excludeTarget.id);
            writer.writeStringValue("@odata.type", excludeTarget.odataType);
            writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", excludeTarget.targetType);
}
