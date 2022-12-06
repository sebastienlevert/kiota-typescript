import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {ExcludeTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExcludeTarget(excludeTarget: ExcludeTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { excludeTarget.id = n.getStringValue() as any ; },
        "@odata.type": n => { excludeTarget.odataType = n.getStringValue() as any ; },
        "targetType": n => { excludeTarget.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType) as any ; },
    }
}
